import { useEffect, useState } from "react";
import Head from "next/head";
import NavBarTop from "../components/NavBarTop";
import Footer from "../components/Footer";
import BreadcrumbArea from "../components/BreadcrumbArea";
import imgDesa from "../public/hero1.jpg";
import Image from "next/image";
import BackToTop from "../components/BackToTop";

const title = "Visi Misi - Desa Krisik";

export default function Sejarah({ posts }) {
  let [namaDesa, setNamaDesa] = useState("Krisik");

  useEffect(() => {
    setNamaDesa("krisik");
  }, []);

  return (
    <>
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
        <BreadcrumbArea pageName="Visi Misi" currentPage="Visi Misi" />

        <div className="container my-5">
          <div className="col-lg-10 mx-auto">
            <div className="card bg-card-primary border-0 shadow-sm px-3 py-3 mb-4">
              <h3 className="text-color-primary">Visi Misi</h3>
              <Image
                src={imgDesa}
                alt="Desa"
                className="img-fluid rounded my-3"
              />
              <h5 className="mt-4 text-color-primary">Visi</h5>
              <p className="text-color-secondary">
                “ Menuju Desa Krisik yang lebih maju, berbudaya, dan religius menuju masyarakat yang mandiri dan sejahtera ”
              </p>
              <h5 className="text-color-primary">Misi</h5>
              <p className="text-color-secondary mb-2">
                1. Bersama masyarakat memperkuat kelembagaan daesa yang ada untuk melayani masyarakat secara optimal
              </p>
              <p className="text-color-secondary mb-2">
                2. Bersama masyarakat dan kelembagaan desa bersama menyelenggarakan pemerintahan desa 
                yang partisipatif
              </p>
              <p className="text-color-secondary mb-2">
                3. Melaksanakan program pemberdayaan masyarakat desa
              </p>
              <p className="text-color-secondary mb-2">
                4. Bersama masyarakat dan kelembagaan memberdayakan masyarakat untuk meningkatkan kesejahteraan masyarakat
              </p>
              <p className="text-color-secondary mb-2">
                5. Meningkatkan kesejahteraan aparatur pemerintah desa
              </p>
              
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
//     const getAllPosts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/post`);
//     const posts = await getAllPosts.json();
//     return {
//         props: { posts }, // will be passed to the page component as props
//     };
// };
