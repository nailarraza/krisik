// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const gender = [
    { "id": 1, "name": "Laki Laki", "total": "553" }, 
    { "id": 2, "name": "Perempuan", "total": "498" }
];

export default function allHandler(req, res) {
    res.status(200).json(gender);
};

