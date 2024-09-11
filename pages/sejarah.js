import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/hero1.jpg";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Sejarah - Desa Krisik";

/**
 * Renders the Sejarah page.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.posts - The posts data.
 * @returns {JSX.Element} The Sejarah page component.
 */
export default function Sejarah({ posts }) {
  let [namaDesa, setNamaDesa] = useState("Krisik");
  let [namaKecamatan, setNamaKecamatan] = useState("Tragah");

  useEffect(() => {
    namaDesa = localStorage.getItem("namaDesa");
    setNamaDesa(namaDesa);
    namaKecamatan = localStorage.getItem("namaKecamatan");
    setNamaKecamatan(namaKecamatan);
  });

  return (
    <>
      <style jsx>
        {`
          .maps {
            height: 450px;
          }
            .text-justify {
  text-align: justify;
}
        `}
      </style>

      <Head>
          <title>Sejarah - Desa Krisik</title>
          <meta name="description" content={`Website Desa ${namaDesa}`} />
          <link rel="icon" href="/logo.png" />
          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content={process.env.NEXT_PUBLIC_API_URL} />
          <meta property="og:title" content={`Situs Resmi Desa ${namaDesa}`} />
          <meta
               property="og:description"
               content={`Website Resmi Desa ${namaDesa}. Powered by. KKN FT UMPO 2024`}
          />
          <meta
               property="og:image"
               content={`${process.env.NEXT_PUBLIC_API_URL}/hero1.jpg`}
          ></meta>
      </Head>

      <NavBarTop />

      <main>
        <BreadcrumbArea pageName="Sejarah Singkat" currentPage="Sejarah" />

        <div className="container my-5">
          <div className="col-lg-10 mx-auto">
            <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
              <h3 className="text-color-primary">Sejarah dan Profil Singkat</h3>
              <Image
                src={imgDesa}
                alt="Foto Desa"
                className="img-fluid rounded my-3"
              />
              <h5 className="mt-4 text-color-primary">
                Uraian Singkat Profil Desa
              </h5>
              <p className="text-justify text-color-secondary">
              Desa Krisik terletak di Kabupaten Ponorogo, Provinsi Jawa Timur. 
              Desa ini memiliki luas wilayah sekitar 773.6 Hektar dengan ketinggian diatas permukaan laut 1065 meter dengan pembagian lahan tanah sawah 27.30 Ha, tanah kering 118.00 Ha, tanah perkebunan 20 Ha, Fasilitas umum 8.30 Ha, tanah hutan 600 Ha. 
              Desa krisik terdiri dari 3 Dusun, yaitu Dusun Krisik, Dusun Surokoyo, dan Dusun Ngreco. Desa ini memiliki 5 RW dan 12 RT.
              Wilayah Desa Krisik terletak pada ketinggian antara 1065 meter diatas permukaan laut. Lahan di Desa Krisik memiliki tingkat kemiringan yang beragam, yang dapat mempengaruhi
              berbagai aspek seperti pertanian, sistem irigasi, pemilihan tanaman, sistem drainase,  dan aksesibilitas ke lahan pertanian.
              Suhu udara di Desa Krisik memiliki variasi harian yang dapat mempengaruhi kehidupan sehari-hari masyarakat. Suhu udara ini mempengaruhi pada pemilihan varietas tanaman,
              aktivitas kegiatan luar ruangan, dan konsumsi energi
              </p>
              <h5 className="mt-4 text-color-primary">
                Sejarah Desa
              </h5>
              <p className="text-justify text-color-secondary">
              Asal mula terjadinya Desa Krisik menurut  sumber cerita para sesepuh di Desa Krisik masa kini sebagai berikut: konon tersebutlah seorang empu yang melarikan diri dari kerajaan ia mendapat tugas dari seorang raja untuk membuat keris, namun dalam
              waktu yang sudah di tentukan keris pesanan raja itu belum dapat terselesaikan. Maka marahlah sang raja dan menjatuhkan hukuman pada empu, tetapi sebelum hukuman dilaksanakan empu berhasil melarikan diri untuk menghindari penangkapan dan pengejaran
              sang empu bersembunyi masuk kearah hutan yang sangat lebat. Setelah merasa aman beristirahatlah sang empu untuk melepaskan lelah, tak lama ia melanjutkan kembali perjalanannya. Namun alangkah terkejutnya tatkala di tengah perjalanannya keris pusakanya
              tertinggal ditempat peristirahatannya. Maka kembalilah sang empu untuk mengambilnya kembali. Ternyata keris pusakanya masih berada di tempat semula. Dan tempat tertinggalnya keris itu dinamakan krisik dalam bahasa jawa dapat di artika kerise isik atau keri 
              ning isik. Demikian sekilas cerita cerita terjadinya Desa Krisik menurut para sesepuh 
              </p>
            </div>
            <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
              <h3 className="text-color-primary">Peta Desa</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44630.088509780435!2d111.69388310509!3d-7.844707997086624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a90b0f20c4a1%3A0xaf7956d75acf1d83!2sKrisik%2C%20Kec.%20Pudak%2C%20Kabupaten%20Ponorogo%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1725238806719!5m2!1sid!2sid"
                className="rounded mt-3 maps"
                allowFullScreen=""
                title="Peta Desa"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
