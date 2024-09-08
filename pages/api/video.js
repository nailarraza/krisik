const video = [
  {
    src: "https://www.youtube.com/embed/0K5wt1EKSoQ",
    title: "Desa Krisik Ponorogo",
  },
  {
    src: "https://www.youtube.com/embed/UyDZhOzdKfk",
    title: "Jalur Terindah Menuju Kampung Penghasil Susu Terbesar di Ponorogo",
  },
];

export default function allHandler(req, res) {
  res.status(200).json(video);
}
