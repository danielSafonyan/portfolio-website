import React from 'react'
import Socials from '../components/Socials'

import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Let's get in touch</h1>
                <div className="home-hero__info">
                <p className="text-primary">
                    We can contact via an email, WhatsApp or LinkedIn.
                </p>
                <p className="text-primary">
                    You can find me at danielSafonyan@gmail.com or +7 999 111 6921.
                </p>
                </div>
                <div className="home-hero__cta">
                <a href='https://www.linkedin.com/in/daniilsafonov/' className="btn btn--bg">Connect on LinkedIn</a>
                </div>
            </div>
    </section>
        )
}