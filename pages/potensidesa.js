import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/hero.webp";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";
import imgAcr1 from "../public/acr1.jpeg";
import imgAcr2 from "../public/acr3.jpg";
import imgAcr4 from "../public/acr4.JPG";
import imgAcr5 from "../public/acr5.JPG";
import imgAcr6 from "../public/acr6.jpg";
import imgAcr7 from "../public/hero1.jpg";

const title = "Potensi - Desa Krisik";

/**
 * Renders the Sejarah page.
 *
 * @param {Object} props - The component props.
 * @param {Array} props.posts - The posts data.
 * @returns {JSX.Element} The Sejarah page component.
 */
export default function Sejarah({ posts }) {
  let [namaDesa, setNamaDesa] = useState("Alang Alang");
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
          <title>{title}</title>
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
               <BreadcrumbArea pageName="Potensi Desa" currentPage="Potensi Desa" />

               <div className="container my-5">
                    <div className="col-lg-10 mx-auto">
                         {/*<div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
                              <h3 className="text-color-primary">Potensi Desa</h3>
                              <Image
                                   src={imgDesa}
                                   alt="Foto Desa"
                                   className="img-fluid rounded my-3"
                              />
                              
                              <p className="text-color-secondary text-justify mt-4">
                                   Berikut adalah potensi desa yang ada di Desa Krisik
                              </p>
                             
                         </div>*/}

                         <div className="card bg-card-primary border-0 shadow-sm px-4 py-4 mb-4">
                              <h3 className="text-color-primary">Potensi Desa</h3>
                              <p className="text-color-secondary text-justify mt-4">
                                   Berikut adalah beberapa bidang yang memiliki potensi di Desa Krisik :
                              </p>
                              <div className="accordion" id="potensiDesaAccordion">
                                   <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                             <button
                                                  className="accordion-button"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapseOne"
                                                  aria-expanded="false"
                                                  aria-controls="collapseOne"
                                             >
                                                  Pertanian
                                             </button>
                                        </h2>
                                        <div
                                             id="collapseOne"
                                             className="accordion-collapse collapse show"
                                             aria-labelledby="headingOne"
                                             data-bs-parent="#potensiDesaAccordion"
                                        >
                                             <div className="accordion-body">
                                                  <p>Desa krisik berada di wilayah pegunungan memiliki aliran sungai yang sangat jernih,
                                                  aliran sungai yang turun langsung melalui perbukitan dari lereng Gunung Wilis membentuk
                                                  Air Terjun. Aliran sungai yang langsung turun menjadi potensi bagi petani di Krisik dengan
                                                  memanfaatkan air menjadi sumber untuk kebutuhan pertanian mereka. Desa Krisik cocok untuk budidaya
                                                  tanaman holtikultura (buah dan sayur). Kondisi tersebut ditunjang dengan ketersediaan air yang melimpah
                                                  dan kontur tanah yang berbukit-bukit. Desa Krisik memiliki potensi unggulan di sektor pertanian karena
                                                  memiliki lahan yang luas dan subur</p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr1}
                                             width="800"
                                             height="520"
                                             />
                                             </div>
                                                  

                                                  <p className="mt-3">Beberapa jenis tanaman yang potensial untuk ditanam di lahan kering Desa Krisik adalah padi sawah,
                                                  wortel, kubis, jagung, dan bawang merah. Dengan hasil produksi padi sawah 3 ton, wortel 200 ton, kubis 100 ton,
                                                  jagung 10 ton, dan bawang merah 15 ton. Dengan memanfaatkan potensi ini, Desa Krisik dapat mengembangkan sektor 
                                                  pertanian dan meningkatkan hasil pertanian melalui intensifikasi, ekstensifikasi, diversifikasi, mekanisasi, dan
                                                  rehabilitas pertanian </p>                                          
                                             </div>
                                        </div>
                                   </div>
                                   <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                             <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapseTwo"
                                                  aria-expanded="false"
                                                  aria-controls="collapseTwo"
                                             >
                                                  Perkebunan
                                             </button>
                                        </h2>
                                        <div
                                             id="collapseTwo"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="headingTwo"
                                             data-bs-parent="#potensiDesaAccordion"
                                        >
                                             <div className="accordion-body">
                                                  <p>Sektor perkebunan juga menjadi salah satu mata pencaharian bagi sebagian besar masyarakat Desa Krisik, baik mereka
                                                       yang memiliki lahan atau yang tidak. Jenis komoditas perkebunan yang dikembangkan petani Desa Krisik adalah Cengkeh dan Kopi.
                                                       produksi Cengkeh di Desa Krisik sebesar 200 ton untuk luas lahan 20 Ha di perkebunan milik rakyat berdasarkan data </p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr6}
                                             width="800"
                                             height="520"
                                             />
                                             </div>
                                                  

                                                  <p className="mt-3">Beberapa jenis tanaman yang potensial untuk ditanam di lahan kering Desa Krisik adalah padi sawah,
                                                  wortel, kubis, jagung, dan bawang merah. Dengan hasil produksi padi sawah 3 ton, wortel 200 ton, kubis 100 ton,
                                                  jagung 10 ton, dan bawang merah 15 ton. Dengan memanfaatkan potensi ini, Desa Krisik dapat mengembangkan sektor 
                                                  pertanian dan meningkatkan hasil pertanian melalui intensifikasi, ekstensifikasi, diversifikasi, mekanisasi, dan
                                                  rehabilitas pertanian </p>                                          
                                             </div>
                                        </div>
                                   </div>
                                   <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                             <button
                                                  className="accordion-button collapsed"
                                                  type="button"
                                                  data-bs-toggle="collapse"
                                                  data-bs-target="#collapseThree"
                                                  aria-expanded="false"
                                                  aria-controls="collapseThree"
                                             >
                                                  Kehutanan
                                             </button>
                                        </h2>
                                        <div
                                             id="collapseThree"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="headingThree"
                                             data-bs-parent="#potensiDesaAccordion"
                                        >
                                             <div className="accordion-body">
                                                  <p>Hutan berperan sebagai pencegah erosi tanah, penyaring dan pengatur aliran air bersih, pengontrol
                                                       hama dan penyakit, tempat berkumpul fauna yang berfungsi sebagai penyerbuk dan pencegahan pemanasan global
                                                       dengan menyerap karbon. Hutan juga berfungsi sebagai penyedia bahan-bahan yang kita butuhkan dikehidupan sehari-hari</p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr2}
                                             width="420"
                                             height="520"
                                             />
                                             </div>
                                                  
                                                  <p className="mt-3">Kawasan hutan yang luas, iklim tropis yang menjadikan tanaman cepat tumbuh dan kekayaan yang tinggi, 
                                                       menjadikan potensi besar yang bisa dikembangkan pada masa yang akan datang. Tak kalahdari kekayaan hutan Desa Krisik,
                                                       sektor hutan di Desa Krisik memiliki keindahan sebagai nilai lebihnya. Luas tanah Hutan Desa Krisik sebesar 600 Ha. Dengan 
                                                       kmoditas mahoni, kayu sengon, dan bambu. Hasil dari komoditas ini, mahoni sebesar 30 ton, kayu sengon 500 ton dan bambu 400 ton</p>                                          
                                             </div>
                                        </div>
                                        <div className="accordion-item">
                                             <h2 className="accordion-header" id="headingFour">
                                                  <button
                                                       className="accordion-button collapsed"
                                                       type="button"
                                                       data-bs-toggle="collapse"
                                                       data-bs-target="#collapseFour"
                                                       aria-expanded="false"
                                                       aria-controls="collapseFour"
                                                  >
                                                       Peternakan
                                                  </button>
                                             </h2>
                                             <div
                                                  id="collapseFour"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="headingFour"
                                                  data-bs-parent="#potensiDesaAccordion"
                                             >
                                                  <div className="accordion-body">
                                                  <p>Desa Krisik dikenal dengan kawasan sentra sapi perah. Sektor peternakan merupakan salah satu sektor unggulan
                                                       di Desa Krisik yang terus didorong untuk dikembangkan, sehingga Krisik mampu menjadi daerah penyedia ternak. Berbagai upaya
                                                       dilakukan untuk meningkatkan populasi dan produksi ternak , ketersediaan pakan, hingga memberdayakan sumber daya manusia
                                                       dibidang peternakan  menjadi mandiri untuk menghadirkan produk unggulan yang berdaya saing di pasar domestik dan global. Bahkan
                                                       banyak upaya yang dilakukan ketika terjadi wabah penyakit yang menyimpan hewan ternak</p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr4}
                                             width="420"
                                             height="520"
                                             />
                                             </div>
                                                  

                                                  <p className="mt-3">Produk-produk hasil ternak seperti susu dan telur tidak hanya dijual sebagai bahan baku, namun diolah sedemikian
                                                       rupa menjadi produk-produk bernilai ekonomis. Dengan adanya diversifikasi pengolahan hasil ternak, pada akhirnya turut menciptakan 
                                                       lapangan pekerjaan baru bagi masyarakat. Dengan jumlah ternak penghasil susu sebanyak 1.800 ekor dan penghasil telur sebanyak 1000 ekor.
                                                       Masyarakat Desa Krisik memiliki aktivitas mencari rumput untuk memberi makan ternaknya dan memeras susu pada pagi dan sore hari </p>                                          
                                             </div>
                                             </div>
                                        </div>
                                       
                                        <div className="accordion-item">
                                             <h2 className="accordion-header" id="headingSix">
                                                  <button
                                                       className="accordion-button collapsed"
                                                       type="button"
                                                       data-bs-toggle="collapse"
                                                       data-bs-target="#collapseSix"
                                                       aria-expanded="false"
                                                       aria-controls="collapseSix"
                                                  >
                                                       Fasilitas
                                                  </button>
                                             </h2>
                                             <div
                                                  id="collapseSix"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="headingSix"
                                                  data-bs-parent="#potensiDesaAccordion"
                                             >
                                                 <div className="accordion-body">
                                                  <p>Desa Krisik menyediakan beberapa fasilitas umum mulai dari tempat ibadah, layanan kesehatan seperti kegiatan posyandu balita dan lansia serta layanan
                                                       polindes, sarana pendidikan dalam bentuk SMP Negeri 1 Pudak, sarana olahraga tersedia lapangan voli, ada balai desa sebagai tempat
                                                       untuk melaksanakan kegiatan bersama warga, dan embung sebagai tempat untuk irigasi.</p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr7}
                                             width="780"
                                             height="520"
                                             />
                                             </div>
                                                  

                                                  <p className="mt-3">Irigasi merupakan upaya yang dilakukan untuk mengairi lahan pertanian. Di Embung banyak anak muda yang olahraga di sore hari
                                                       dan embung menjadi salah satu tempat untuk mengadakan kegiatan besar karena ada lapangan yang besar. Embung menjadi salah satu potensi yang besar untuk kedepannya</p>                                          
                                             </div>
                                             </div>
                                        </div>
                                        <div className="accordion-item">
                                             <h2 className="accordion-header" id="headingSeven">
                                                  <button
                                                       className="accordion-button collapsed"
                                                       type="button"
                                                       data-bs-toggle="collapse"
                                                       data-bs-target="#collapseSeven"
                                                       aria-expanded="false"
                                                       aria-controls="collapseSeven"
                                                  >
                                                       Wisata
                                                  </button>
                                             </h2>
                                             <div
                                                  id="collapseSeven"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="headingSeven"
                                                  data-bs-parent="#potensiDesaAccordion"
                                             >
                                                   <div className="accordion-body">
                                                  <p>Coban Lawe di Krisik adalah salah satu tempat wisata yang berada di Desa Krisik, Kabupaten Ponorog, Jawa Timur, Indonesia. Tempat ini sangat indah dan bisa
                                                       memberikan sensasi yang berbeda dengan aktivitas kita sehari-hari. Penduduk lokal daerah Wisata Air terjun Coban Lawe di Ponorogo
                                                       jungan sangat ramah terhadap wisatawan lokal maupun wisatawan asing</p>   
                                                  
                                                    
                                             <div className="d-flex justify-content-center">
                                             <Image 
                                             alt="pertanian"
                                             src={imgAcr5}
                                             width="420"
                                             height="520"
                                             />
                                             </div>
                                                  

                                                  <p className="mt-3">Lokasinya di kaki Gunung Wilis yang terkenal dengan hawa yang sejuk. Di sekitar Coban Lawe terdapat beberapa destinasi wisata menarik
                                                       seperti perkebunan sayur dan wisata Tanah Goyang. Air Terjun Coban Lawe berada di wilayah pegunungan dengan aliran sungai yang jernih. Aliran air yang
                                                       berasal dari kawasan perbukitan di lereng Gunung Wilis membentukn Air Terjun</p>                                          
                                             </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </main>
          <Footer />
          <BackToTop />
     </>
);
}
