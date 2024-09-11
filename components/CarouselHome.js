import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import imgHero from "../public/hero1.jpg";
import imgHeroA from "../public/hero6.jpg";
import imgHeroB from "../public/hero5.jpg";

export default function CarouselHome() {
    let [namaDesa, setNamaDesa] = useState("Krisik");

    useEffect(() => {
        namaDesa = localStorage.getItem("namaDesa");
        setNamaDesa(namaDesa);
    });

    return (
        <>
            <style jsx>{`
                .carousel-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.4);
                }
                .carousel-caption {
                    bottom: 17em;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .carousel-text {
                    font-weight: 400;
                    font-size: 20px;
                }
                @media (max-width: 575.98px) {
                    .carousel-caption h1 {
                        font-size: 24px !important;
                    }
                    .carousel-caption {
                        bottom: 5.5em !important;
                    }
                    .carousel-text {
                        font-size: 16px !important;
                    }
                }
                @media (min-width: 576px) and (max-width: 767.98px) {
                    .carousel-caption h1 {
                        font-size: 32px !important;
                    }
                    .carousel-caption {
                        bottom: 8em !important;
                    }
                }
                @media (min-width: 768px) and (max-width: 991.98px) {
                    .carousel-caption {
                        bottom: 11em !important;
                    }
                }
                @media (min-width: 992px) and (max-width: 1199.98px) {
                    .carousel-caption {
                        bottom: 12em !important;
                    }
                }
                @media (min-width: 1600px) {
                    .carousel-caption {
                        bottom: 24em !important;
                    }
                }
            `}</style>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="d-flex justify-content-center">
                            <Image
                                alt="Carousel"
                                src={imgHero}
                                width="1920"
                                height="860"
                                className="img d-block carousel-zoom"
                            />
                        </div>
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Selamat Datang di Webite Desa Krisik</h1>
                            <p className="carousel-text">Pusat Layanan Informasi Resmi Desa</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <Image
                                alt="Carousel"
                                src={imgHeroA}
                                width="1920"
                                height="860"
                                className="d-block carousel-zoom"
                            />
                        </div>
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Desa Potensi Wisata</h1>
                            <p className="carousel-text">Air Terjun Coban Lawe yang Indah</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="d-flex justify-content-center">
                            <Image
                                alt="Carousel"
                                src={imgHeroB}
                                width="1920"
                                height="860"
                                className="d-block carousel-zoom"
                            />
                        </div>
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption">
                            <h1>Desa Produsen Susu Sapi Terbesar</h1>
                            <p className="carousel-text">Salah satu sentra Susu Segar bekerjasama dengan Nestle</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}
