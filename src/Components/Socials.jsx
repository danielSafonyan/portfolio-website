import React from 'react'

export default function Socials() {
    return (
        <div className="home-hero__socials">
                <div className="home-hero__social">
                <a href="https://www.linkedin.com/in/daniilsafonov/" className="home-hero__social-icon-link">
                    <img src="src/assets/img/linkedin-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
                <div className="home-hero__social">
                <a href="https://github.com/danielSafonyan" className="home-hero__social-icon-link">
                    <img src="src/assets/img/github-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
                <div className="home-hero__social">
                <a href="https://www.instagram.com/danielsafonyan/" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
                    <img src="src/assets/img/insta-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
            </div>
    )
}