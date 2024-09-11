// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const gender = [
    { "id": 1, "name": "Laki Laki", "total": "33" }, 
    { "id": 2, "name": "Perempuan", "total": "12" }
];

export default function allHandler(req, res) {
    res.status(200).json(gender);
};

