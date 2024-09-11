// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const status = [
    { "id": 1, "name": "Belum Menikah", "total": "0" }, 
    { "id": 2, "name": "Menikah", "total": "0" },
    { "id": 3, "name": "Bercerai", "total": "0" },
];

export default function allHandler(req, res) {
    res.status(200).json(status);
};

