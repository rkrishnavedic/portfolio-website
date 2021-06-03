import React, { useEffect, useRef } from 'react';
import './component.css';
import dav from './assets/dav.jpeg';
import iitg from './assets/iitg.png';

const eduData = [
    {
        school: 'IIT Guwahati',
        address: 'Indian Institute of Technology Guwahati, Guwahati, Assam – 781039, India',
        major: 'Mathematics and Computing',
        degree: 'B.Tech.',
        background: iitg,
        duration: '2018-22'
    },
    {
        school: 'DAV Public School',
        address:'BSEB Colony, New Punaichak, Bihar - 800023, India',
        major: 'PCM [CBSE]',
        degree: 'HSC',
        background:dav,
        duration: '2016-18'
    }
]

export default function Education({scrollId}){

    const compId = 4;

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
                    <h4>Education</h4>
                </div>
                
                
                    {eduData.map((_eduItem=>{
                        return(
                            <div className="odd-card">
                                <img src={_eduItem.background} alt='img'/>
                                <div className="card-detail">
                                    <h4>{_eduItem.school}</h4>
                                    <p>
                                        <p>
                                            <span style={{fontWeight:'bold'}}>Subject Area:</span> {_eduItem.major}
                                        </p>
                                        <p>
                                            <span style={{fontWeight:'bold'}}>Degree:</span> {_eduItem.degree} [{_eduItem.duration}]
                                        </p>
                                        <p>
                                            <span style={{fontWeight:'bold'}}>Address:</span> {_eduItem.address}
                                        </p>
                                        
                                    </p>
                                </div>
                            </div>
                        )
                    }))}

                
            </div>
        </div>
    )
}