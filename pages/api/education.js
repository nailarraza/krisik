// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const education = [
    { "id": 1, "name": "SD", "total": "368" }, 
    { "id": 2, "name": "SMP", "total": "281" },
    { "id": 3, "name": "SMA", "total": "65" }, 
    { "id": 4, "name": "Diploma", "total": "1" },
    { "id": 5, "name": "Sarjana", "total": "11" },
    { "id": 6, "name": "Belum/Tidak Sekolah", "total": "178" }, 
    { "id": 7, "name": "Sedang Menempuh SD", "total": "147" }, 
];

export default function allHandler(req, res) {
    res.status(200).json(education);
};

