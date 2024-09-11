// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const pekerjaan = [
    { "id": 1, "name": "Belum / Tidak Bekerja", "total": "138" }, 
    { "id": 2, "name": "Pelajar / Mahasiswa", "total": "110" },
    { "id": 3, "name": "Pegawai Negeri Sipil", "total": "1" }, 
    { "id": 4, "name": "Pensiunan)", "total": "1" },
    { "id": 5, "name": "Petani", "total": "252" },
    { "id": 6, "name": "Bidan", "total": "1" },
    { "id": 7, "name": "Guru", "total": "3" },
    { "id": 8, "name": "Rumah Tangga", "total": "211" },
    { "id": 9, "name": "Karyawan Swasta", "total": "211" },
    { "id": 10, "name": "Wiraswasta", "total": "294" },
    { "id": 11, "name": "Perangkat Desa", "total": "10" },
    { "id": 12, "name": "Perawat", "total": "1" },
    { "id": 13, "name": "Kepala Desa", "total": "1" },
];

export default function allHandler(req, res) {
    res.status(200).json(pekerjaan);
};

