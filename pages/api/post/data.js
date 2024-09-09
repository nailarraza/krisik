export let posts = [];

export const fetchPosts = async () => {
  try {
    const response = await fetch("https://back-krisik.vercel.app/berita");
    const data = await response.json();
    posts = data;
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

// Panggil fungsi fetchPosts untuk mengambil data saat diperlukan
fetchPosts();
