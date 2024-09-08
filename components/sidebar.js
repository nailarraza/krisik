import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useRouter } from "next/router";

export default function NavBarTop({ user, handleLogout }) {
  const router = useRouter();
  const handleProfileClick = () => {
    router.push("/profile"); // Example route for profile
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <div className="container">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/_berita">Berita</Nav.Link>
            <Nav.Link href="/_features">Agenda</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {user ? (
              <NavDropdown title={user.email} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
