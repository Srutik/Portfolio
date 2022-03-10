import React from 'react';
import Animation from './Animation';
// import { useInterval } from 'rooks';
import Typical from 'react-typical';
import "./Profile.css";

export default function Profile() {
    
    return (
        <div className='profile-container' id="">
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                            <a href='#'>
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a href="#">
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a href='#'>
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a href='#'>
                                <i class="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>
                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'M <Animation />
                         </span>
                    </div>

                    <div className='profile-details-role'>
                        <span className='primary-text'>
                            {" "}
                            <h1>
                                {" "}
                                <Typical
                                    loop={Infinity}
                                    steps={[
                                        "Enthusiastic Dev 🤖",
                                        1000,
                                        "ReactJs Developer 💻",
                                        1000,
                                        "NodeJs Developer 📝",
                                        1000,
                                        "Full Stack Developer 📌",
                                        1000,
                                    ]}
                                />
                            </h1>
                            <span className='profile-role-tagline'>
                                Knack of building application with front and back end operation.
                            </span>
                        </span>
                    </div>
                    <div className='profile-options'>
                    <a  href='/#ContactMe' >
                        <button className='btn primary-btn'>
                            {" "}Hire Me{" "}
                        </button>
                        </a>
                        <a href='CV Srutikkumar 1.pdf' download="Srutik CV Srutikkumar 1.pdf">
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'></div>
                </div>
            </div>
        </div>
    )
}
