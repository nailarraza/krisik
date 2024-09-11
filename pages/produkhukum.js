import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import BackToTop from "../components/BackToTop";

const title = "Produk Hukum - Desa Krisik";

export default function ProdukHukum({ covid }) {
    let [namaDesa, setNamaDesa] = useState("Krisik");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    // const dataGender = populateData(gender);
    // const [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal] = getTotalData(covid);
    // console.log(covid.dataKecamatan);

    return (
        <>
            <style jsx>
                {`
					.shadow-custom {
						box-shadow: 0 4px 16px rgb(0 0 0 / 10%);
					}
				`}
            </style>

            <Head>
                <title>{title}</title>
                <meta name="description" content={`Website Desa ${namaDesa}`} />
                <link rel="icon" href="/logo.png" />
                {/* <!-- Open Graph / Facebook --> */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL}/>
                <meta property="og:title" content={`Situs Resmi Desa ${namaDesa}`}/>
                <meta property="og:description" content={`Website Resmi Desa ${namaDesa}. Media komunikasi dan transparansi Pemerintah Desa`}/>
                <meta property="og:image" content={`${process.env.NEXT_PUBLIC_API_URL}/metalogo.jpg`}></meta>
            </Head>

            <NavBarTop />

            <main>
                <div className="bg-color-primary">
					<Breadcrumb pageName="Hukum" currentPage="Produk Hukum" />
				</div>

                <div className="container my-5">
                    <div className="card bg-card-primary border-0 shadow-custom px-3 pt-3">
                        <h4 className="text-color-primary">Produk Hukum</h4>
                        <div className="table-responsive mt-3">
                            <table className="table text-color-secondary table-borderless">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>Dokumen</th>
                                        <th>Jenis</th>
                                        <th>Tahun</th>
                                        <th>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>SK TIM Penyusun RPJMDes Tahun 2017</td>
                                        <td>SK Kades</td>
                                        <td>2017</td>
                                        <td>
                                            <a href="#" className="text-decoration-none">
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>SK Pengangkatan RT dan Pemberentian RT Baru</td>
                                        <td>Peraturan Desa</td>
                                        <td>2017</td>
                                        <td>
                                            <a href="#" className="text-decoration-none" >
                                                Download
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

            <BackToTop />
        </>
    );
}

// This gets called on every request to this page
// export async function getServerSideProps() {
//     const getDataCovid = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/covid`);
//     const covid = await getDataCovid.json();
//     return {
//         props: { covid }, // will be passed to the page component as props
//     };
// };

// Count each row value for total row
// function getTotalData(param) {
//     const konfirmasi = [], aktif = [], sembuh = [], meninggal = [];
//     let totalKonfirmasi = 0, totalAktif = 0, totalSembuh = 0, totalMeninggal = 0;
//     param.dataKecamatan.map(item =>
//         konfirmasi.push(item.konfirmasi)
//     );
//     param.dataKecamatan.map(item =>
//         aktif.push(item.aktif)
//     );
//     param.dataKecamatan.map(item =>
//         sembuh.push(item.sembuh)
//     );
//     param.dataKecamatan.map(item =>
//         meninggal.push(item.meninggal)
//     );

//     for (let index = 0; index < konfirmasi.length; index++) {
//         totalKonfirmasi += parseInt(konfirmasi[index]);
//         totalAktif += parseInt(aktif[index]);
//         totalSembuh += parseInt(sembuh[index]);
//         totalMeninggal += parseInt(meninggal[index]);
//     }

//     return [totalKonfirmasi, totalAktif, totalSembuh, totalMeninggal];
// }
