import React from 'react';
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

export default function Skills(){
    return(
        <div className="container">
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