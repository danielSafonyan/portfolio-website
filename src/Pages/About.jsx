import React from 'react'
import Socials from '../components/Socials'

import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <div className="home-hero__info">
                <p className="text-primary">
                    In this section you can preview my CV in the browser or download it.
                </p>
                <iframe src="https://drive.google.com/file/d/1Z_MtM6lQ3YhpkMFzW7FaTAcqMJimoON5/preview" 
                height="400"
                width="100%"
                allow="autoplay"></iframe>
                <a href='#' className="btn btn--bg">Download CV</a>
                </div>
            </div>
    </section>
        )
}