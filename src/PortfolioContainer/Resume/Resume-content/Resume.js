import React, { useState } from 'react';
import './Resume.css';

export default function Resume() {
    const [toggleCard, setToggleCard] = useState(1);

    const changeCard = (index) => {
        setToggleCard(index);
    }


    return (
        <div className="resume-container" id="Resume">
            <div className='resume-parent'>
                <div className='heading-container'>
                    <div className='screen-heading'>
                        <span>Resume</span>
                    </div>
                    <div className='screen-sub-heading'>
                        <span>My Bio Details</span>
                    </div>
                    <div className='heading-seperator'>
                        <div className='seperator-line'></div>
                        <div className='seperator-blob'>
                            <div></div>
                        </div>
                    </div>
                </div>


                <div className='resume-card-container'>
                    <div className='resume-part1'>
                        <div className='resume-icon-card'>
                            <div className='resume-icon'>
                                <SchoolIcon />
                            </div>
                            <div className='resume-icon'>
                                <WorkIcon />
                            </div>
                            <div className='resume-icon'>
                                <DevicesIcon />
                            </div>
                            <div className='resume-icon'>
                                <AssessmentIcon />
                            </div>
                            <div className='resume-icon'>
                                <InterestsIcon />
                            </div>
                        </div>

                        <div className='resume-name-card'>
                            <div className={toggleCard === 1 ? 'resume-icon-name-active' : 'resume-icon-name'} onClick={() => changeCard(1)}>
                                Education
                            </div>
                            <div className={toggleCard === 2 ? 'resume-icon-name-active' : 'resume-icon-name'} onClick={() => changeCard(2)}>
                                Work History
                            </div>
                            <div className={toggleCard === 3 ? 'resume-icon-name-active' : 'resume-icon-name'} onClick={() => changeCard(3)}>
                                Skills
                            </div>
                            <div className={toggleCard === 4 ? 'resume-icon-name-active' : 'resume-icon-name'} onClick={() => changeCard(4)}>
                                Projects
                            </div>
                            <div className={toggleCard === 5 ? 'resume-icon-name-active' : 'resume-icon-name'} onClick={() => changeCard(5)}>
                                Interests
                            </div>
                        </div>
                    </div>

                    <div className={toggleCard === 1 ? 'resume-details-card-active' : 'resume-details-card'}>
                        <Education />
                    </div>


                    <div className={toggleCard === 2 ? 'resume-details-card-active' : 'resume-details-card'}>
                        <WorkHistory />
                    </div>

                    <div className={toggleCard === 3 ? 'resume-details-card-active' : 'resume-details-card'}>
                        <Programming />
                    </div>

                    <div className={toggleCard === 4 ? 'resume-details-card-active' : 'resume-details-card'}>
                        <Projects />
                    </div>

                    <div className={toggleCard === 5 ? 'resume-details-card-active' : 'resume-details-card'}>
                        <Interest />
                    </div>
                </div>
            </div>
        </div>
    )
}




