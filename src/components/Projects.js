import React, { useEffect, useRef } from 'react';
import './component.css';
import photosfire_image from './assets/photosfire_image.png';
import learn4fun_image from './assets/learn4fun_image.png';

const data = [
    {
        title: 'photosFire',
        desc: 'A photos gallery web app using reactJS for frontend and firebase as backend. Also framer-motion for smooth transitions.',
        code: 'https://github.com/rkrishnavedic/photo_firebase',
        live: 'https://demo-photosfire.netlify.app',
        background: photosfire_image
    },
    {
        title: 'Learn4fun',
        desc: 'MERN Project using Codeforces API for CF Tools and another API in expressJS for blogs data storage in mongoDB as database.',
        code: 'https://bit.ly/3zJtcQZ',
        live: 'https://learn4fun.netlify.app',
        background: learn4fun_image
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
                                <img src={_project.background? _project.background:"https://sm.pcmag.com/pcmag_in/guide/t/the-best-p/the-best-project-management-software-for-2021_ehu1.jpg"} alt='pro'/>
                                
                                <div className="card-detail">
                                    <h4>{_project.title}</h4>
                                    <p>{_project.desc}</p>
                                    <div className='bottom'>
                                        
                                        <a href={_project.live} style={{textDecoration:'none'}}><button>[Live]</button></a>
                                        
                                        <a href={_project.code} style={{textDecoration:'none'}}><button>[code]</button></a>
                                        
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                
            </div>

    )
}