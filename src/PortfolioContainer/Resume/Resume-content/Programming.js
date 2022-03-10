import React from 'react';
import { easeQuadInOut } from 'd3-ease';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Programming() {
    return (
        <div className='skills-flex'>
            <div className='flex1'>
                <div className='skills-heading'>Programming Skills</div>
                <div className='skill-list'>
                    <p>JavaScript</p>
                    <p>90%</p>
                </div>
                <div className='skill'>
                    <div className='skill-percent' style={{ "width": "90%" }}></div>
                </div>


                <div className='skill-list'>
                    <p>HTML</p>
                    <p>75%</p>
                </div>
                <div className='skill'>
                    <div className='skill-percent' style={{ "width": "75%" }}></div>
                </div>

                <div className='skill-list'>
                    <p>CSS</p>
                    <p>80%</p>
                </div>
                <div className='skill'>
                    <div className='skill-percent' style={{ "width": "80%" }}></div>
                </div>
            </div>



            <div className='flex2'>
                <div className='skills-heading'>Professional Skills</div>

                <div className='GridView'>
                    <div className='row-1'>
                        <div className='circle-bar'>
                            <div style={{ width: 70, height: 60 }}>
                            <CircularProgressbarWithChildren
                                    value={90}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        pathTransitionDuration: 0.5,
                                        // pathTransition: 'none',
                                        pathColor: `#4DA8DA`,
                                        trailColor: '#1f2235',
                                    })}
                                >
                                    <strong>90%</strong>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='professional-list'>
                                <p>Communication</p>
                            </div>
                        </div>

                        <div className='circle-bar'>
                            <div style={{ width: 70, height: 60 }}>
                            <CircularProgressbarWithChildren
                                    value={80}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        pathTransitionDuration: 0.5,
                                        // pathTransition: 'none',
                                        pathColor: `#4DA8DA`,
                                        trailColor: '#1f2235',
                                    })}
                                >
                                    <strong>80%</strong>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='professional-list'>
                                <p>Problem-solving</p>
                            </div>
                        </div>
                    </div>


                    <div className='row-2'>
                        <div className='circle-bar'>
                            <div style={{ width: 70, height: 60 }}>
                            <CircularProgressbarWithChildren
                                    value={85}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        pathTransitionDuration: 0.5,
                                        // pathTransition: 'none',
                                        pathColor: `#4DA8DA`,
                                        trailColor: '#1f2235',
                                    })}
                                >
                                    <strong>85%</strong>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='professional-list'>
                                <p>Time-management</p>
                            </div>
                        </div>

                        <div className='circle-bar'>
                            <div style={{ width: 70, height: 60 }}>
                                <CircularProgressbarWithChildren
                                    value={70}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'round',
                                        pathTransitionDuration: 0.5,
                                        // pathTransition: 'none',
                                        pathColor: `#4DA8DA`,
                                        trailColor: '#1f2235',
                                    })}
                                >
                                    <strong>70%</strong>
                                </CircularProgressbarWithChildren>
                            </div>
                            <div className='professional-list'>
                                <p>Leadership</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='skill-list'>
                    <p>Leadership</p>
                    <p>85%</p>
                </div>
                <div className='skill'>
                    <div className='skill-percent' style={{ "width": "85%" }}></div>
                </div> */}

                </div>
            </div>


        </div>
    )
}
