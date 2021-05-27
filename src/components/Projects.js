import React from 'react';
import './Projects.css';

const data = [
    {
        title: 'Project 1',
        desc: 'I understand that the conduct of this background check will entail verifying that the information I provided in my Employment Application, Curriculum Vitae/Resume, Disclosure/Authorization, and/or the information requested below (together called "Source Documents") is accurate, that I am suitable for employment with IBM, and that sources such as public records, court records, and records of law enforcement agencies will be used to perform this verification.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    {
        title: 'Project 1',
        desc: 'I understand that the conduct of this background check will entail verifying that the information I provided in my Employment Application, Curriculum Vitae/Resume, Disclosure/Authorization, and/or the information requested below (together called "Source Documents") is accurate, that I am suitable for employment with IBM, and that sources such as public records, court records, and records of law enforcement agencies will be used to perform this verification.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    {
        title: 'Project 1',
        desc: 'I understand that the conduct of this background check will entail verifying that the information I provided in my Employment Application, Curriculum Vitae/Resume, Disclosure/Authorization, and/or the information requested below (together called "Source Documents") is accurate, that I am suitable for employment with IBM, and that sources such as public records, court records, and records of law enforcement agencies will be used to perform this verification.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    
]

export default function Projects(){
    return(

            <div className="projects-container">
                <div className="heading">
                    PROJECTS
                </div>
                <div className="data">
                {data.map((_project)=>{
                    return(
                        <div className="project">
                            <h2>{_project.title}</h2>
                            <p>{_project.desc}</p>
                            <div className='button-set'>
                                <button>See live</button>
                                <button>code</button>
                            </div>
                        </div>
                    )
                })}
                </div>
                
            </div>

    )
}