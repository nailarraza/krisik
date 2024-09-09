// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function allPostHandler(req, res) {
  try {
    const response = await fetch("https://back-krisik.vercel.app/berita");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}
