import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
// localStorage is a built-in browser API, no need to import it
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // Authentication status check on component load
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem("session-token");
        const response = await fetch(
          "https://back-krisik.vercel.app/auth/user",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log(response);
        if (response.status === 401) {
          // Unauthorized, stay on login page
          localStorage.removeItem("session-token");
        } else if (response.status === 200) {
          router.push("/dashboard");
          return;
        }
      } catch (error) {
        setError("An error occurred while checking authentication.");
      }
    };

    checkAuthStatus();
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Clear previous error
    try {
      const response = await fetch(
        "https://back-krisik.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || "Login failed");
        return;
      }
      const data = await response.json();
      const token = data.token;
      localStorage.setItem("session-token", token);
      router.push("/dashboard"); // Navigate to dashboard
    } catch (error) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <NavBarTop />
      <div className="container mt-5 mb-5">
        <h1 className="text-center mb-4">Login</h1>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form
              onSubmit={handleSubmit}
              className="shadow p-4 rounded bg-light"
            >
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="form-group mb-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
