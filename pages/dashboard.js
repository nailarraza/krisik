import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import { useRouter } from "next/router";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("session-token");

      // Redirect to login if no token is found
      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch(
          "https://back-krisik.vercel.app/auth/user", // Example endpoint to get user data
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setUser(data); // Assuming data contains user info
        } else {
          router.push("/login"); // Redirect to login if unauthorized
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setError("Failed to load user data. Please try again.");
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("session-token");
    router.push("/login");
  };

  return (
    <main>
      <NavBarTop />
      <div className="container mt-5">
        <h1 className="text-center mb-4">Dashboard</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            {error ? (
              <div className="alert alert-danger">{error}</div>
            ) : user ? (
              <div className="card shadow p-4 rounded bg-light">
                <h2>Welcome, {user.uid}!</h2>
                <p>Email: {user.email}</p>
                <button onClick={handleLogout} className="btn btn-danger mt-3">
                  Logout
                </button>
              </div>
            ) : (
              <p>Loading user data...</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
