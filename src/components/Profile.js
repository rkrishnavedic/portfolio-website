import React from 'react';
import me from './assets/me.png';
import arrow from './assets/arrow.svg';
import './component.css';

export default function Profile(){

    return(

        <div className="container">
            <div className="profile">
                <div className="profile-left">
                    
                    <div>
                        <h3>
                            "If you Think 
                            
                            yourselves strong, 
                            <br/>strong you will be."
                        </h3>
                        <p>-Swami Vivekanand</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', width:'fit-content'}}>
                        <h5>
                            Start a brief conversation
                        </h5>
                        <a style={{textDecoration:'none'}} href="https://www.linkedin.com/in/rahulkrishna23/"><button>Let's Connect! &nbsp; &nbsp; &nbsp; <img src={arrow} alt='arr'/></button></a>
                    </div>
                </div>
                <div className="profile-right">
                    <img src={me} alt='me'/>
                    
                </div>
            </div>

        </div>

    )
}


