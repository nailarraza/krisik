// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const gender = [
    { "id": 1, "name": "Laki Laki", "total": "0" }, 
    { "id": 2, "name": "Perempuan", "total": "0" }
];

export default function allHandler(req, res) {
    res.status(200).json(gender);
};

