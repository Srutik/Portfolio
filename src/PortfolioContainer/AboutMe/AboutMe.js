import React from 'react';
// import { Transition } from 'react-transition-group';
import './AboutMe.css';

export default function AboutMe() {
    return (
        <div className="about-me-container" id="AboutMe">
            <div className='about-me-parent'>
                <div className='heading-container'>
                    <div className='screen-heading'>
                        <span>About Me</span>
                    </div>
                    <div className='screen-sub-heading'>
                        <span>Why choose me ?</span>
                    </div>
                    <div className='heading-seperator'>
                        <div className='seperator-line'></div>
                        <div className='seperator-blob'>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>
                            "ReactJs developer with basic background knowledge of NodeJs, along with a knack of building application with utmost efficiency."
                        </span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heeading'>
                                <span>Here are a Few Highlights:</span>
                            </div>
                            <div className='highlight'>
                                <div className='highlight-blob'></div>
                                <span>ReactJs development</span>
                            </div>
                            <div className='highlight'>
                                <div className='highlight-blob'></div>
                                <span>Interactive Front End as per the design</span>
                            </div><div className='highlight'>
                                <div className='highlight-blob'></div>
                                <span>Responsive Web Applications</span>
                            </div>
                        </div>
                        <div className='about-me-options'>
                            <a href='/#ContactMe'>
                                <button class="btn primary-btn">Hire Me</button>
                            </a>
                            <a href='CV Srutikkumar 1.pdf' download="Srutik CV Srutikkumar 1.pdf">
                                <button className='btn highlighted-btn'>Get Resume</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
