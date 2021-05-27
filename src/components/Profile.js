import React from 'react';
import './Profile.css';
import Typewriter from 'typewriter-effect';
import EarthPic from './earth.png';

export default function Profile(){

    return(

        <div className="profile-container">
            <div className="profile">
                <h3>Namaste!</h3>
                <p>
                    <Typewriter
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
                    />
                </p>
            </div>

            <div className="profile-info">
                <img src={EarthPic} alt='earth-pic'/>
            </div>

        </div>

    )
}