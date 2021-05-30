import React from 'react';
import Typewriter from 'typewriter-effect';
import me from './me.png';

export default function Profile(){

    return(

        <div className="container">
            <div className="profile">
                <div className="profile-left">
                    
                    <h3>Think More</h3>
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