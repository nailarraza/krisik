// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const photos = [
  {
    src: "https://i.pinimg.com/originals/92/bb/cf/92bbcfa7d162e3c5ad14486e246e49af.jpg",
    title: "Image 1",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/f4/32/55/f43255c4dbb78910a0e548ffdcddde89.jpg",
    title: "Image 2",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/82/ef/d2/82efd2d7a96b382aca5aa085aa9730ec.jpg",
    title: "Image 3",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/70/c1/4a/70c14a18b8191fb23db6ee7606603c7e.jpg",
    title: "Image 4",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/95/50/bf/9550bfe22aa2ead9efa441f46e1fb072.jpg",
    title: "Image 5",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/5d/32/8d/5d328decb393bddb9bf2243296f892b2.jpg",
    title: "Image 6",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/5e/9d/74/5e9d74087e3bc7e341cb9b915cc6756b.jpg",
    title: "Image 7",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/14/66/f2/1466f21f263acd90d6328f8ddb530433.jpg",
    title: "Image 8",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/90/9b/24/909b247d012072c159bcf73d673e805a.jpg",
    title: "Image 9",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/1c/c4/7b/1cc47bed22203a405cc795a45e637871.jpg",
    title: "Image 10",
    width: 4,
    height: 4,
  },
  {
    src: "https://i.pinimg.com/originals/0d/0c/0c/0d0c0cf4d287df6f7edf29ef2dd1c893.jpg",
    title: "Image 11",
    width: 4,
    height: 4,
  },
  
];

export default function allHandler(req, res) {
  res.status(200).json(photos);
}
