import React from 'react';
import './Projects.css';

const data = [
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        code: 'https://www.google.com',
        live: '',
        background: ''
    },
    {
        title: 'Project 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
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