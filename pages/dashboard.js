import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBarTop from "../components/NavBarTop";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";

const title = "Dashboard - Desa Krisik";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("session-token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const response = await fetch(
          "https://back-krisik.vercel.app/auth/user", // Example endpoint
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setUser(data);
        } else {
          router.push("/login");
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
    <div className="d-flex justify-content-center">
      <title>{title}</title>
      <div className="flex-grow-1">
        <NavBarTop user={user} handleLogout={handleLogout} />
        <Sidebar user={user} handleLogout={handleLogout} />
        <div className="container mt-5">
          <h1 className=" mb-5 text-center">Dashboard</h1>
          <div className="row justify-content-center mt-4 ">
            <div className="col-md-8 mb-5">
              {error ? (
                <div className="alert alert-danger">{error}</div>
              ) : user ? (
                <div className="card shadow p-4 rounded bg-light text-center mb-4">
                  <h2 className="bold">Selamat Datang!</h2>
                  <p>{user.email}</p>

                  <div className="card shadow p-4 rounded bg-light center mt-4 ">
                    <Link href="/_berita">
                      <a className="btn btn-primary">Ke Menu Berita</a>
                    </Link>
                  </div>
                </div>
              ) : (
                <p>Loading user data...</p>
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
