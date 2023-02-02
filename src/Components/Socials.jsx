import React from 'react'

export default function Socials() {
    return (
        <div className="home-hero__socials">
                <div className="home-hero__social">
                <a href="#" className="home-hero__social-icon-link">
                    <img src="src/assets/img/linkedin-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
                <div className="home-hero__social">
                <a href="#" className="home-hero__social-icon-link">
                    <img src="src/assets/img/github-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
                <div className="home-hero__social">
                <a href="#" className="home-hero__social-icon-link home-hero__social-icon-link--bd-none">
                    <img src="src/assets/img/insta-ico.png" alt="icon" className="home-hero__social-icon" />
                </a>
                </div>
            </div>
    )
}