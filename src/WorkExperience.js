import React from 'react';
import JPM from './images/JPMLogo.png';
import ECCOM from './images/ECCOMLogo.jpeg';
import './WorkExperience.css';
/* need to fix formatting, want there to more padding on the paragraphs and smaller heading size*/
function WorkExperience(){
    return(
        <section id = "work" className = "WorkExperience">
            
            <div className = "WorkExperience">
                <h1 className = "WorkExperience">
                    Work Experience
                </h1>
                <img className = "compImage" src = {JPM} alt = "JPM Logo"/>
                <h2 className = "WorkExperience">
                    JP Morgan Credit Risk Summer Analyst
                </h2>
                <h3 className = "WorkExperience">
                    June 2024 - August 2024
                </h3>
                <p className = "WorkExperience">
                    Worked on the TMT Credit team to analyze the risk and creditworthiness of investment grade and high yield companies. Used 
                    valuation techniques to determine fair value of company and determine loan amount. Worked with loan  syndication to determine
                    the amount of the loan JP Morgan would be safe with holding. 
                </p>
                <img className = "compImage" src = {JPM} alt = "JPM Logo"/>
                <h2 className = "WorkExperience">
                    JP Morgan Wealth Management Summer Analyst
                </h2>
                <h3 className = "WorkExperience">
                    May 2023 - July 2023
                </h3>
                <p>
                    Worked within the Equity Markets team to help high net worth individuals manage their portfolios when their companies IPO. 
                </p>
                <img className = "compImage" src = {ECCOM} alt = "ECCOM Logo"/>
                <h2 className = "WorkExperience">
                    ECCOM Data Science Intern
                </h2>
                <h3 className = "WorkExperience">
                    July 2023 - September 2023
                </h3>
                <p>
                    Worked with the operations team to help provide digital solutions to clients through consulting. Used Python and Data Analysis
                    to determine certain items that were causing trading latencies for a trading firm, and helped suggest different tools that would 
                    increase efficiency. 
                </p>
            </div>
        </section>
    )
}

export default WorkExperience;
