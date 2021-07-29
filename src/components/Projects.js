import React, { useEffect, useRef } from 'react';
import './component.css';

const data = [
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    
    
]

export default function Projects({scrollId}){

    const compId = 2;

    const compRef = useRef(null);

    useEffect(()=>{
        if(scrollId === compId){
            compRef.current.scrollIntoView();
        }
    },[scrollId])

    return(

            <div ref={compRef} className="odd-container">
                
                <div className="card-space">
                    <div className="void-card">
                        <h4>Projects</h4>
                    </div>
                    {data.map((_project)=>{
                        return(
                            <div className="odd-card">
                                <img src="https://sm.pcmag.com/pcmag_in/guide/t/the-best-p/the-best-project-management-software-for-2021_ehu1.jpg" alt='pro'/>
                                
                                <div className="card-detail">
                                    <h4>{_project.title} change this</h4>
                                    <p>{_project.desc}</p>
                                    <div className='bottom'>
                                        
                                        <button>[Live]</button>
                                        
                                        <button>[code]</button>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                
            </div>

    )
}