import React from 'react'
import Socials from '../components/Socials'

import { NavLink } from "react-router-dom";

export default function Home() {
function downloadCV() {
    const downloadUrl = 'https://drive.google.com/u/0/uc?id=1Z_MtM6lQ3YhpkMFzW7FaTAcqMJimoON5&export=download'
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.setAttribute(
      'download',
      `safonovCV.pdf`,
    );
    link.click();
}
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <div className="home-hero__info">
                <p className="text-primary">
                    In this section you can preview my CV in the browser or download it.
                </p>
                {/* <iframe src="https://drive.google.com/file/d/1Z_MtM6lQ3YhpkMFzW7FaTAcqMJimoON5/preview" 
                height="400"
                width="100%"
                allow="autoplay"></iframe> */}
                <iframe src="https://docs.google.com/document/d/e/2PACX-1vQHVrOq6FEtHhtjXhigIrl0QOkhrj3y0MlA4xf2cqAiyrXISsKJXgPVpri_4X7ChgmA4h4uChLjsBAB/pub?embedded=true"
                height="400"
                width="100%"></iframe>
                <a href='#' className="btn btn--bg" onClick={downloadCV}>Download CV</a>
                </div>
            </div>
    </section>
        )
}