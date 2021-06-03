import React, { useEffect, useRef } from 'react';
import './component.css';
import webIllustration from './assets/webIll.png';
import codeIllustration from './assets/codeIll.png';

const skilldata = [
    {
        name: 'Web Development',
        illustration:webIllustration,
        items:[
            "reactJS",
            "expressJS",
            "mongoDB"
        ]
        
    },
    {
        name: 'Programming',
        illustration:codeIllustration,
        items:[
            "C++",
            "python",
            "javaScript"
        ]
    },
]

export default function Skills({scrollId}){
    const compId = 3;

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
                    <h4>Skills</h4>
                </div>
                {
                    skilldata.map((_skill)=>{
                        return(
                            <div className="card">
                                <img src={`${_skill.illustration}`} alt="ski"/>
                                <div className="card-detail">
                                <h4>{_skill.name}</h4>
                                <p>
                                    {_skill.items.map(_subSkill=>{
                                        return(
                                            <p>{_subSkill}</p>
                                        )
                                    })}
                                </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}