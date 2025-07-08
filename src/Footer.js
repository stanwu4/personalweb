import React from 'react';
import './Footer.css';

function Footer(){
    return(
        <section className = "Footer">
            <div className = "link">
                Contact Me: 
                <a className = "Footer" href = "mailto:stanleywu0421@gmail.com">Email</a>
                <a className = "Footer" href = "https://www.linkedin.com/in/stanleywu1/">LinkedIn</a>
                <a className = "Footer" href = "https://github.com/stanwu4">Github</a>
            </div>
        </section>
    )
}

export default Footer;