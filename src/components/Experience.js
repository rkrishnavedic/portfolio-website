import React, { useEffect, useRef } from 'react';
import './component.css';
import eb from './assets/ibm-eb.png';

export default function Experience({scrollId}){

    const compId = 1;

    const compRef = useRef(null);

    useEffect(()=>{
        if(scrollId === compId){
            compRef.current.scrollIntoView();
        }
    },[scrollId])

    return(
        <div ref={compRef} className="container">
            <div className="card-space">
                <div className="void-card">
                    <h4>Experience</h4>
                </div>
                
                <div className="card">
                    <img src={eb} alt='eb'/>

                    <div className="card-detail">
                        <h4>IBM Extreme Blue Intern 2021</h4>
                        <p>
                            Learned a lot through this Technical Leadership Program.
                            Explored both technical and business aspects of the project and its implications to wide range of Audiences.
                        </p>
                        <div className="bottom">
                            
                            
                        <a href='https://www.ibm.com/employment/extremeblue/' style={{textDecoration:'none'}}><button>Learn More</button></a>
                            
                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}