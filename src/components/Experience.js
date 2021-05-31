import React from 'react';
import './component.css';
import eb from './assets/ibm-eb.png';

export default function Experience(){

    return(
        <div className="container">
            <div className="card-space">
                <div className="void-card">
                    <h4>Experience</h4>
                </div>
                
                <div className="card">
                    <img src={eb} alt='eb'/>

                    <div className="card-detail">
                        <h4>Extreme Blue Intern 2021</h4>
                        <p>
                            Learned a lot through this Technical Leadership Program.
                            Explored both technical and business aspects of the project and its implications to wide range of Audiences.
                        </p>
                        <div className="bottom">
                            <button>Learn more</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}