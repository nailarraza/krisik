// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const photos = [
  {
    src: "https://i.pinimg.com/564x/2e/3e/75/2e3e75d65aaab97dd7f6fd123f2b7afe.jpg",
    title: "Image 1",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/8b/b6/a2/8bb6a2acaff2b6253767dbd3c017b11b.jpg",
    title: "Image 2",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/4f/56/af/4f56af12d41c56ee2bcfe8ab09fff2b5.jpg",
    title: "Image 3",
    width: 4,
    height: 3,
  },
];

export default function allHandler(req, res) {
  res.status(200).json(photos);
}
