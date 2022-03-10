import React, { useState } from 'react';
import './Resume.css';
import Education from './Resume-content/Education';
import WorkHistory from './Resume-content/Work-History';
import Programming from './Resume-content/Programming';
import Projects from './Resume-content/Projects';
import Interest from './Resume-content/Interest';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DevicesIcon from '@mui/icons-material/Devices';
import AssessmentIcon from '@mui/icons-material/Assessment';
import InterestsIcon from '@mui/icons-material/Interests';


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

                <div className='resume-card'>
                    <div className='resume-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>
                                <div className={toggleCard === 1 ? 'selected-bullet' : 'bullet'} onClick={() => changeCard(1)}>
                                    <div className='bullet-logo'>
                                        <SchoolIcon />
                                    </div>
                                    <span className='bullet-label'>Education</span>
                                </div>
                                <div className={toggleCard === 2 ? 'selected-bullet' : 'bullet'} onClick={() => changeCard(2)}>
                                <div className='bullet-logo'>
                                        <WorkIcon />
                                    </div>
                                    <span className='bullet-label'>Work-History</span>
                                </div>
                                <div className={toggleCard === 3 ? 'selected-bullet' : 'bullet'} onClick={() => changeCard(3)}>
                                <div className='bullet-logo'>
                                        <DevicesIcon />
                                    </div>
                                    <span className='bullet-label'>Programming skills</span>
                                </div>
                                <div className={toggleCard === 4 ? 'selected-bullet' : 'bullet'} onClick={() => changeCard(4)}>
                                <div className='bullet-logo'>
                                        <AssessmentIcon />
                                    </div>
                                    <span className='bullet-label'>Projects</span>
                                </div>
                                <div className={toggleCard === 5 ? 'selected-bullet' : 'bullet'} onClick={() => changeCard(5)}>
                                <div className='bullet-logo'>
                                        <InterestsIcon />
                                    </div>
                                    <span className='bullet-label'>Intresets</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='resume-bullet-details'>
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
        </div>
    )
}




