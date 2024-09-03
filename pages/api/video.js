// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const video = [
  {
    src: "https://youtu.be/0K5wt1EKSoQ?si=_KAJLMPzCq0Vu8u1",
    title: "Desa krisik ponorogo",
  },
  {
    src: "https://www.youtube.com/embed/GfO-3Oir-qM",
    title: "Title Video 2",
  },
  {
    src: "https://www.youtube.com/embed/r9PeYPHdpNo",
    title: "Title Video 3",
  },
  {
    src: "https://www.youtube.com/embed/XmtXC_n6X6Q",
    title: "Title Video 4",
  },
];

export default function allHandler(req, res) {
  res.status(200).json(video);
}
