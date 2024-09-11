import { useEffect } from "react";
import React, { useState, useCallback } from "react";
import Image from "next/image";
import imgLogo from "../public/logo.png";
import { Analytics } from "@vercel/analytics/react"
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
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
            <style jsx>{`
                footer a:hover {
                    color: #0d6efd;
                    transition: all 1s ease;
                }
                .text-white-80 {
                    color: #d4d4d4;
                }
                .border-top-dark {
                    border-top: 1px solid #4141417c !important;
                }
                .text-15 {
                    font-size: 16px;
                }
                .bg-dark {
                    background-color: #171717 !important;
                }
            `}</style>

            <footer className="bg-dark text-white border-top-primary">
                <div className="container pt-5">
                    <div className="row">
                        
                    <div className="col-md-8 col-lg-4 my-2 my-md-0">
                            <h4>KRISIK BANGKIT</h4>
                            <Image src={imgLogo} className="img-fluid" alt="image" height={100} width={100} />
                            <p className="text-white-80 text-15">Jalan Raya Pudak - Pulung, 63483, Krisik, Pudak, Ponorogo, Provinsi Jawa Timur, Indonesia</p>
                        </div>

                        <div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    <div className="d-flex">
                                        <i className="me-2"><FaInstagram/></i>
                                        @pemdeskrisik.pudak
                                    </div>
                                </li>
                                <li className="my-2">
                                    <i className="me-2"><FaPhoneAlt/></i>
                                    085156001102
                                </li>
                                <li className="my-2">
                                    <i className="me-2"><FaEnvelope/></i>
                                    pemdeskrisik@gmail.com
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-8 col-lg-4 my-2 my-md-0">
                            <h4>Tentang Website Desa Krisik</h4>
                            <p className="text-white-80 text-15">Ini adalah Website Resmi Pemerintah Desa Krisik, Kecamatan Pudak, Kabupaten Ponorogo, Jawa
                                Timur. </p>
                                <p className="text-white-80 text-15">Sumber informasi mengenai Desa Krisik yang dikelola oleh Pemuda dan Pemerintah </p>
                        </div>
                        {/*<div className="col-md-6 col-lg-3 my-2 my-md-0">
                            <h5 className="mb-3">Kontak Penting</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    Puskesmas - (0321) 876208
                                </li>
                                <li className="my-2">
                                    Polsek - (0321) 861184
                                </li>
                                <li className="my-2">
                                    Damkar - (0321) 854928
                                </li>
                                <li className="my-2">
                                    PLN - 123
                                </li>
                            </ul>
                        </div>*/}
                        {/*<div className="col-md-6 col-lg-2 my-2 my-md-0">
                            <h5 className="mb-3">Aplikasi Desa</h5>
                            <ul className="list-unstyled text-white-80 text-decoration-none text-15">
                                <li className="my-2">
                                    <a href="https://web-anjungan-desa.vercel.app" className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Sistem Desa</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://web-anjungan-desa.vercel.app" className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Pengaduan Online</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://web-anjungan-desa.vercel.app" className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Pengajuan Surat</a>
                                </li>
                                <li className="my-2">
                                    <a href="https://web-anjungan-desa.vercel.app" className="text-decoration-none text-white-80" rel="noreferrer" target="_blank">Info Kesehatan</a>
                                </li>
                            </ul>
                        </div>*/}
                    </div>
                    <div className="row pt-3 pb-md-0 mt-4 border-top-dark">
                        <div className="col-md-8  text-center text-md-start text-15">
                            <p className="text-white-80">Copyright © 
                                <a href="https://teknik.umpo.ac.id" className="text-decoration-none text-white-80"> KKN FT UMPO'24</a> |  
                                <a href="https://ponorogo.go.id" className="text-decoration-none text-white-80"> Pemerintah Desa Krisik</a>
                            </p>
                        </div>
                        
                        <div className="col-md-4 mb-3 text-center text-md-end ">
                            <a href="https://www.youtube.com/" className="mx-2 text-white-80" aria-label="Youtube" rel="noreferrer" target="_blank">
                                <i className=""><FaYoutube /></i>
                            </a>
                            <a href="https://www.instagram.com/" className="mx-2 text-white-80" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <i className=""><FaInstagram /></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}