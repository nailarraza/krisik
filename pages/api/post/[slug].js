export default async function singlePostHandler(req, res) {
  const { slug } = req.query; // Destructure the slug from query
  try {
    const response = await fetch("https://back-krisik.vercel.app/berita");
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Failed to fetch posts" });
    }
    const posts = await response.json();
    const filteredPost = posts.find((post) => post.slug === slug);
    if (filteredPost) {
      return res.status(200).json(filteredPost);
    } else {
      return res
        .status(404)
        .json({ message: `Post with slug: ${slug} not found.` });
    }
  } catch (error) {
    console.error("Error fetching post:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
