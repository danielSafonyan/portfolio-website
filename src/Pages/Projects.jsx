import React from 'react'
import Header from '../components/Header'
import Socials from '../components/Socials'
import Project from '../components/Project'

import { NavLink } from "react-router-dom";

import projectData from '../assets/projectData'

export default function Home() {
    const [currentFilter, setCurrentFilter] = React.useState('All')
    // const projectElems = projectData.map((el, idx) => <Project key={idx} {...el} />)
    let projectElems
    
    if (currentFilter === 'All') {
        projectElems = projectData.map((el, idx) => <Project key={idx} {...el} />)
    } else {
        projectElems = projectData.filter(el => el.technology === currentFilter).map((el, idx) => <Project key={idx} {...el} />)
    }

    return (
        <section className="home-hero">
            <div className="home-hero__content">
                <div className="home-hero__info">
                <p className="text-primary"> 
                    This section is a showcase of my web development skills and experience. 
                </p>
                <p className="text-primary"> 
                    The portfolio website itself is built with React Framework. Other projects are built using Vanilla JavaScript or React. You can filter out a project by technology.
                </p>
                <p className="text-primary"> 
                    Each project has a link to live preview and source code on GitHub.
                </p>
                </div>
            </div>
            <div className="filters">
                    <div 
                        className={`filter-btn ${currentFilter === 'All' ? 'active-btn' : ''}`}
                        onClick={() => setCurrentFilter('All')}

                    >All</div>
                    <div 
                        className={`filter-btn ${currentFilter === 'Vanilla JS' ? 'active-btn' : ''}`}
                        onClick={() => setCurrentFilter('Vanilla JS')}
                    >Vanilla JS</div>
                    <div 
                        className={`filter-btn ${currentFilter === 'React' ? 'active-btn' : ''}`}
                        onClick={() => setCurrentFilter('React')}
                    >React</div>
                </div>
            <section className='projects-container'>
                {projectElems}
            </section>
    </section>
        )
}

// name: 'Hacker News Clone',
//         previewImg: 'https://i.ibb.co/1mytnxQ/hackernews-clone.png',
//         previewLink: 'https://danielsafonyan.github.io/hackernews-clone/',
//         gitHubLink: 'https://github.com/danielSafonyan/hackernews-clone',
//         technology: 'Vanilla JS'