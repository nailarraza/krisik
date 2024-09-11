// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const education = [
    { "id": 1, "name": "SD", "total": "0" }, 
    { "id": 2, "name": "SMP", "total": "0" },
    { "id": 3, "name": "SMA", "total": "0" }, 
    { "id": 4, "name": "Diploma", "total": "0" },
    { "id": 5, "name": "Sarjana", "total": "0" },
];

export default function allHandler(req, res) {
    res.status(200).json(education);
};

