const video = [
  {
    src: "https://www.youtube.com/embed/MBxDizTNsJw?si=-3GbIAGhAEWsqcBS",
    title:
      "Bursa Inovasi Desa Kabupaten Ponorogo 2019 | Embung Bangunsari Desa Krisik",
  },
  {
    src: "https://www.youtube.com/embed/qdMHFbG1IDs?si=S3fOYLBnrQee4Ofp",
    title: "Pasar Ramadhan Desa Krisik kecamatan Pudak Ponorogo",
  },
  {
    src: "https://www.youtube.com/embed/UyDZhOzdKfk",
    title: "Jalur Terindah Menuju Kampung Penghasil Susu Terbesar di Ponorogo",
  },
];

export default function allHandler(req, res) {
  res.status(200).json(video);
}
