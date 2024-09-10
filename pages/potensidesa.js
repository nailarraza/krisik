import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/hero.webp";
import imgLogo from "../public/logo.png";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

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
               <BreadcrumbArea pageName="Potensi Desa" currentPage="Potensi" />

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
                                   Berikut adalah potensi desa yang ada di Desa Krisik
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
                                                  pertanian yang ada di Desa krisik adalah kwkwk. <br />                                                
                                                  <a href="pertanian.js">Baca Selengkapnya</a>
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
                                                  Peternakan
                                             </button>
                                        </h2>
                                        <div
                                             id="collapseTwo"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="headingTwo"
                                             data-bs-parent="#potensiDesaAccordion"
                                        >
                                             <div className="accordion-body">
                                                  peternakan yang ada di Desa krisik adalah kwkwk. <br />                                                
                                                  <a href="peternakan.js">Baca Selengkapnya</a>
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
                                                  Wisata Alam
                                             </button>
                                        </h2>
                                        <div
                                             id="collapseThree"
                                             className="accordion-collapse collapse"
                                             aria-labelledby="headingThree"
                                             data-bs-parent="#potensiDesaAccordion"
                                        >
                                             <div className="accordion-body">
                                                  wisata alam yang ada di Desa krisik adalah kwkwk. <br />                                                
                                                  <a href="wisata.js">Baca Selengkapnya</a>
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
                                                       Potensi Lainnya
                                                  </button>
                                             </h2>
                                             <div
                                                  id="collapseFour"
                                                  className="accordion-collapse collapse"
                                                  aria-labelledby="headingFour"
                                                  data-bs-parent="#potensiDesaAccordion"
                                             >
                                                   <div className="accordion-body">
                                                 Yo Ndak Tau Kog Nanya Saya <br />                                                
                                                  <a href="wisata.js">Baca Selengkapnya</a>
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
