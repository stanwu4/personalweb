import React from 'react';
import './Projects.css';

function Projects(){
    return(
        <section id = "projects" className = "Projects">
            <h1 className = "Projects">
                Projects
            </h1>
            <h2 className = "Projects">
                Equity Prediction Machine Learning Model
            </h2>
            <p className = "Projects">
                Took Financial Data of around 1000 companies and used different machine learning prediction models to predict 
                the future prices of equities. Wrote a report regarding the accuracy of model and our findings, providing recommendations 
                for industries to look into and certain stocks. 
            </p>
            <h2 className = "Projects">
                Euchre
            </h2>
            <p>
                Created a euchre game in C++. Worked to implement bot players with different play styles depending on the hand given. 
                Worked to implement expected gain/loss on certain hands to help improve the bot's decision making. 
            </p>
            <p>
                To Be Continued...
            </p>
        </section>
    )
}

export default Projects;