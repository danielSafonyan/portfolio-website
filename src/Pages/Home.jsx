import React from 'react'
import Socials from '../components/Socials'

import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <h1 className="heading-primary">Hi, my name is Dani</h1>
                <div className="home-hero__info">
                <p className="text-primary">
                    I am a Project Manager transitioning to a career in Frontend Software Development.
                </p>
                <p className="text-primary"> 
                    My background at Alibaba gave me hands-on experience leading projects and working with development teams.
                </p>
                <p className="text-primary">
                    I have a Bachelor's Degree in Information Systems, which has provided me with a solid foundation for a career in the field.
                </p>
                </div>
                <div className="home-hero__cta">
                <NavLink to={'/projects'} className="btn btn--bg">See my projects</NavLink>
                </div>
            </div>
    </section>
        )
}