import React from 'react';

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
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    
]

export default function Projects(){
    return(

            <div className="projects-container">
                <h2 className="heading">
                    PROJECTS
                </h2>
                <div className="data">
                {data.map((_project)=>{
                    return(
                        <div className="project">
                            <div className="project-left">
                                <h2>{_project.title}</h2>
                                <p>{_project.desc}</p>
                                <div className='button-set'>
                                    <button>See live</button>
                                    <button>code</button>
                                </div>
                            </div>
                            <div className="project-right">
                                <img src="https://sm.pcmag.com/pcmag_in/guide/t/the-best-p/the-best-project-management-software-for-2021_ehu1.jpg" alt='pro'/>
                            </div>
                        </div>
                    )
                })}
                </div>
                
            </div>

    )
}