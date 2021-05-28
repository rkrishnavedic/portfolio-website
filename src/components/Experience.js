import React from 'react';
import './Experience.css';
import svg from './experience.svg';

export default function Experience(){

    return(
        <div className="experience-container">

            <div className="heading">
                EXPERIENCE
            </div>
            <div className="data">
                <div className="experience-detail">
                    <div className="timestamp">May 2021 - Present</div>
                    <div className="divider"/>
                    <p>
                     Extreme Blue Intern at <a href="https://www.ibm.com/" style={{fontWeight:'bold',color:'#0f62fe', cursor:'pointer'}}>IBM</a>
                    </p>
                    
                </div>


                <img src={svg} alt='exp'/>
            </div>


        </div>
    )
}