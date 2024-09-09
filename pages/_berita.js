import { useState, useEffect } from "react";
import {
  Form,
  Button,
  Container,
  Row,
  Col,
  Spinner,
  Alert,
} from "react-bootstrap";
import NavBarTop from "../components/NavBarTop";
import Sidebar from "../components/sidebar";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import DataTable from "react-data-table-component";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "7", // Default to 'Berita'
    excerpt: "",
    body: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [beritaList, setBeritaList] = useState([]);
  const [loadingBerita, setLoadingBerita] = useState(true);
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
        }
      } catch (error) {
        console.error("Failed to fetch user data", error);
        setError("Failed to load user data. Please try again.");
      }
    };

    fetchUserData();
    fetchBeritaList();
  }, [router]);

  const fetchBeritaList = async () => {
    setLoadingBerita(true);
    try {
      const response = await fetch("https://back-krisik.vercel.app/berita");
      if (response.ok) {
        const data = await response.json();
        setBeritaList(data); // Assuming API returns an array of berita
      } else {
        setError("Failed to fetch articles");
      }
    } catch (error) {
      console.error("Error fetching articles:", error);
      setError("Failed to fetch articles. Please try again.");
    } finally {
      setLoadingBerita(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("session-token");
    router.push("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const token = localStorage.getItem("session-token");

    if (!token) {
      router.push("/login");
      return;
    }

    const formPayload = new FormData();
    formPayload.append("title", formData.title);
    formPayload.append("category", formData.category);
    formPayload.append("excerpt", formData.excerpt);
    formPayload.append("body", formData.body);
    if (formData.image) {
      formPayload.append("image", formData.image);
    }

    try {
      const response = await fetch(
        "https://back-krisik.vercel.app/berita/create",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formPayload,
        }
      );

      if (response.ok) {
        alert("Article created successfully!");
        setFormData({
          title: "",
          category: "7",
          excerpt: "",
          body: "",
          image: null,
        });
        fetchBeritaList(); // Refresh the list of articles
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to create article");
      }
    } catch (error) {
      console.error("Failed to create article", error);
      setError("Failed to create article. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Columns for the DataTable
  const columns = [
    { name: "No", selector: (row, index) => index + 1, width: "50px" },
    { name: "Title", selector: (row) => row.title, sortable: true },
    { name: "Category", selector: (row) => row.category, sortable: true },
    { name: "Excerpt", selector: (row) => row.excerpt },
    { name: "Body", selector: (row) => row.body },
  ];

  return (
    <div className="d-flex">
      <div className="flex-grow-1">
        <NavBarTop user={user} handleLogout={handleLogout} />
        <Sidebar user={user} handleLogout={handleLogout} />
        <Container className="mt-5">
          <h1 className="mb-4">Create Berita</h1>
          {error && <Alert variant="danger">{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="category">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="7">Berita</option>
                    <option value="5">Kesehatan</option>
                    <option value="Acak">Acak</option>
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="excerpt">
                  <Form.Label>Excerpt</Form.Label>
                  <Form.Control
                    type="text"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="body">
                  <Form.Label>Body</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="body"
                    value={formData.body}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group controlId="image">
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? (
                <Spinner animation="border" size="sm" />
              ) : (
                "Create Berita"
              )}
            </Button>
          </Form>

          <hr />

          <h2 className="mt-5">All Berita</h2>
          {loadingBerita ? (
            <Spinner animation="border" />
          ) : (
            <DataTable
              columns={columns}
              data={beritaList}
              pagination
              highlightOnHover
              striped
            />
          )}
        </Container>
        <Footer />
      </div>
    </div>
  );
}
