// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pekerjaan = [
    { "id": 1, "name": "Belum / Tidak Bekerja", "total": "0" }, 
    { "id": 2, "name": "Pelajar / Mahasiswa", "total": "0" },
    { "id": 3, "name": "Pegawai Negeri Sipil", "total": "0" }, 
    { "id": 4, "name": "Tentara Nasional Indonesia (TNI)", "total": "0" },
    { "id": 5, "name": "Petani", "total": "0" },
];

export default function allHandler(req, res) {
    res.status(200).json(pekerjaan);
};

