import React from 'react';
import Typewriter from 'typewriter-effect';
import me from './me.png';
import arrow from './arrow.svg';
import './component.css';

export default function Profile(){

    return(

        <div className="container">
            <div className="profile">
                <div className="profile-left">
                    
                    <div>
                        <h3>
                            "If you Think 
                            <br/>
                            yourselves strong, 
                            <br/>strong you will be."
                        </h3>
                        <p>-Swami Vivekanand</p>
                    </div>

                    <div style={{display:'flex', flexDirection:'column', width:'fit-content'}}>
                        <h5>
                            Start a brief conversation
                        </h5>
                        <button>Let's Connect! <img src={arrow} alt='arr'/></button>
                    </div>
                </div>
                <div className="profile-right">
                    <img src={me} alt='me'/>
                    {/* <Typewriter
                        options={{
                            loop:true,
                        }}
                        onInit={(typewriter)=>{
                            typewriter
                                .changeDeleteSpeed(1)
                                .changeDelay(50)
                                .typeString('I am a Student')
                                .pauseFor(1500)
                                .deleteAll()
                                .typeString('and a Developer')
                                .pauseFor(2500)
                                .start()
                        }}
                    /> */}
                </div>
            </div>

        </div>

    )
}