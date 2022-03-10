import React from 'react';

export default function Projects() {
    return (
        <div>
            <div className='resume-details-content'>
                <div className='resume-highlight'>
                    <div className='resume-highlight-blob'></div>
                    <div>
                        <span>Portfolio Website</span>
                    </div>

                    <div className='details-year'>2020-2021</div>
                </div>
                <div className='details-description'>
                    I build my personal portfolio web application , It describe me and my professional work in details.
                </div>
            </div>

            <div className='resume-details-content'>
                <div className='resume-highlight'>
                    <div className='resume-highlight-blob'></div>
                    <div>
                        <span>Restaurant Website</span>
                    </div>

                    <div className='details-year'>2020-2021</div>
                </div>
                <div className='details-description'>
                    I build a Restaurant web , It includes a lot of functionality with the help of NodeJs as a back-end.
                    {/* Moreover , it containts total five panels such as USER , ADMIN , MANAGER , COOK , WAITER. */}
                </div>
            </div>
        </div>
    )
}
