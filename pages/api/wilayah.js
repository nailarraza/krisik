// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const wilayah = [
    { "id": 1, "name": "Krisik", "rt": "0", "kk": "0", "male": "0", "female": "0",  "total": "0" }, 
    { "id": 2, "name": "Reco", "rt": "0", "kk": "0", "male": "0", "female": "0",  "total": "0" },
    { "id": 3, "name": "Surokoyo", "rt": "0", "kk": "0", "male": "0", "female": "0", "total": "0" },
];

export default function allHandler(req, res) {
    res.status(200).json(wilayah);
};

