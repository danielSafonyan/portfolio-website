import React from 'react'
import Header from '../components/Header'
import { NavLink } from "react-router-dom";

export default function Home() {
    console.log("i am rendering")
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hi, My name is Dani</h1>
                <div className="home-hero__info">
                <p className="text-primary">
                    I am an experienced Project Manager transitioning to a career in Frontend Software Development. 
                </p>
                <p className="text-primary"> My experience at Alibaba gave me hands-on experience leading projects and working with development teams.</p>
                <p className="text-primary">I have a Bachelor's Degree in Information Systems, which has provided me with a solid foundation for the career in the field.</p>
                </div>
                <div className="home-hero__cta">
                <NavLink to={'/projects'} className="btn btn--bg">See my projects</NavLink>
                </div>
            </div>
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
    </section>
        )
}