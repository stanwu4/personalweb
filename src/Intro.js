import React from 'react';
import profile from './images/profile.jpeg';
import github from './images/github.svg';
import gmail from './images/gmail.svg';
import linkedin from './images/linkedin.svg';
import './Intro.css';


/* Maybe include contact info at the top of the page as well, fix not working links to direct to each section of the website*/
function Intro() {
    return(
        <section className = "Intro" id = "intro">
            <header className = "Intro">
                <div className = "logo">
                    <h1>Stanley Wu</h1>
                </div>
                <nav className = "Intro">
                    <a className = "Intro" href = "#intro">About</a>
                    <a className = "Intro" href = "#work">Work Experience</a>
                    <a className = "Intro" href = "#projects">Projects</a>
                </nav>
            </header>
            <img src = {profile} alt = "Stanley Wu" />
            <div className = "container" id = "intro">
                <h1>Welcome to My Personal Website</h1>
                <div className = "socials">
                    <a href = "https://github.com/stanwu4">
                        <img id = "icon" src = {github} alt = "Github" />
                    </a>
                    <a href = "mailto:stanleywu0421@gmail.com">
                        <img id = "icon" src = {gmail} alt = "Gmail" />
                    </a>
                    <a href = "https://www.linkedin.com/in/stanleywu1/">
                        <img id = "icon" src = {linkedin} alt = "LinkedIn" />
                    </a>
                </div>
                <p className = "Intro">
                    Hi, I’m Stanley! I’m a Business and Computer Science student at the University of Michigan, passionate about the intersection of technology and finance.
                    Outside of work, I love surfing, playing basketball, football, and poker. I’m a die-hard fan of the Golden State Warriors, 
                    San Francisco 49ers, and Real Madrid. I also enjoy playing competitive fps games such as Counter Strike.  <br /><br />
                    I’m always eager to learn and explore how technology can shape the future of finance. Feel free to connect with me!. 
                </p>
            </div>
        </section>
    )
}

export default Intro;