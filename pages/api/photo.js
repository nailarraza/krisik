// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const photos = [
  {
    src: "https://i.pinimg.com/564x/5e/9d/74/5e9d74087e3bc7e341cb9b915cc6756b.jpg",
    title: "Image 1",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/92/bb/cf/92bbcfa7d162e3c5ad14486e246e49af.jpg",
    title: "Image 2",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/f4/32/55/f43255c4dbb78910a0e548ffdcddde89.jpg",
    title: "Image 3",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/2e/3e/75/2e3e75d65aaab97dd7f6fd123f2b7afe.jpg",
    title: "Image 4",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/8b/b6/a2/8bb6a2acaff2b6253767dbd3c017b11b.jpg",
    title: "Image 5",
    width: 4,
    height: 3,
  },
  {
    src: "https://i.pinimg.com/564x/4f/56/af/4f56af12d41c56ee2bcfe8ab09fff2b5.jpg",
    title: "Image 6",
    width: 4,
    height: 3,
  },
];

export default function allHandler(req, res) {
  res.status(100).json(photos);
}


