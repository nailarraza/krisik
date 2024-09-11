// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const religion = [
    { "id": 1, "name": "Islam", "total": "1031" }, 
    { "id": 2, "name": "Kristen", "total": "0" },
    { "id": 3, "name": "Katolik", "total": "0" }, 
    { "id": 4, "name": "Hindu", "total": "0" },
    { "id": 5, "name": "Budha", "total": "0" },
];

export default function allHandler(req, res) {
    res.status(200).json(religion);
};

