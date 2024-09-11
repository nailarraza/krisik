// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pekerjaan = [
    { "id": 1, "name": "Belum / Tidak Bekerja / Pensiun", "total": "350" }, 
    { "id": 2, "name": "Pelajar / Mahasiswa", "total": "110" },
    { "id": 3, "name": "Pegawai Negeri Sipil", "total": "12" }, 
    { "id": 4, "name": "Umum", "total": "313" },
    { "id": 5, "name": "Petani", "total": "252" },
];

export default function allHandler(req, res) {
    res.status(200).json(pekerjaan);
};

