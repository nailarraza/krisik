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
              <h3 className="text-color-primary">Sejarah Singkat</h3>
              <Image
                src={imgDesa}
                alt="Foto Desa"
                className="img-fluid rounded my-3"
              />
              <h5 className="mt-4 text-color-primary">
                Uraian Singkat Profil Desa
              </h5>
              <p className="text-color-secondary text-justify">
                Desa Krisik merupakan Desa yang terletak di dataran rendah
                yang sebelah selatannya terdapat Selat Madura, tinggi dari
                permukaan Pantai yaitu 2 M. Selain itu Desa Krisik memiliki
                Luas 113,48 Ha. Jarak tempuh dari Desa menuju Kantor Kecamatan
                yaitu 2 KM. Desa Krisik terdiri dari 7 dusun, 7 RW dan 32 Rt
                dengan jumlah penduduk sebanyak 6.506 Jiwa, dengan rincian
                Laki-laki 3.178 jiwa dan perempuan 3.328 jiwa.
              </p>
              <p className="text-justify text-color-secondary">
              Desa Krisik, terletak di Kecamatan Pudak, Kabupaten Ponorogo, Jawa Timur, memiliki sejarah yang kaya dan unik yang mencerminkan perjalanan panjang masyarakatnya dari masa ke masa. Nama Krisik diyakini berasal dari kondisi geografis desa yang dikelilingi oleh perbukitan dan hutan yang dahulu lebat, sehingga memberikan kesan sejuk dan asri. Desa ini awalnya merupakan permukiman kecil yang sebagian besar penduduknya hidup dari bertani, beternak, dan memanfaatkan hasil alam dari hutan sekitar.
Seiring berjalannya waktu, penduduk desa mulai berkembang, dan desa Krisik menjadi salah satu pusat kegiatan ekonomi kecil di wilayah Pudak. Pada masa kolonial, desa ini sempat menjadi titik strategis dalam distribusi hasil pertanian, terutama jagung dan kopi, yang menjadi komoditas utama di wilayah tersebut.
Kebudayaan desa Krisik sangat dipengaruhi oleh adat Jawa yang kuat, dengan adanya upacara adat, tradisi gotong royong, dan kegiatan sosial yang masih berlangsung hingga saat ini. Selain itu, pengaruh agama Islam juga sangat kuat di desa ini, sebagaimana terlihat dari banyaknya masjid dan kegiatan keagamaan yang rutin diadakan.
Meskipun telah mengalami modernisasi, Desa Krisik tetap menjaga kearifan lokal dan tradisi yang diwariskan oleh leluhurnya. Hingga kini, desa ini terus berkembang, dengan masyarakat yang semakin terbuka terhadap teknologi dan pendidikan, namun tetap mempertahankan nilai-nilai kebersamaan dan kekeluargaan.
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
