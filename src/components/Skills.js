import React from 'react';
import './component.css';

const skilldata = [
    {
        name: 'reactJS',
        outOf10: 8,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name: 'expressJS',
        outOf10: 7,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png'
    },
    {
        name: 'C++',
        outOf10: 9,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg'
    },
    {
        name: 'python',
        outOf10: 8,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name: 'mongoDB',
        outOf10: 7,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
    },
    {
        name: 'cloud',
        outOf10: 4,
        illustration: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg'
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
                                    <div className="progress-back">
                                        <div style={{width:`${_skill.outOf10*10}%`}} className="progress-bar"/>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}