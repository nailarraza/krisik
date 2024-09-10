export default async function singlePostHandler(req, res) {
  const { id } = req.query; // Destructure category id from query
  try {
    const response = await fetch("https://back-krisik.vercel.app/berita");
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ message: "Failed to fetch posts" });
    }
    const posts = await response.json();
    const filteredPosts = posts.filter((post) => post.category === id);
    if (filteredPosts.length > 0) {
      return res.status(200).json(filteredPosts);
    } else {
      return res
        .status(404)
        .json({ message: `Posts with category: ${id} not found.` });
    }
  } catch (error) {
    console.error("Error fetching posts:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
