import React from 'react';

const ProjectSummary = ({project}) => {
    const { title } = project; //destructuring
    return(
        <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
           <span className='card-title'>{title}</span>
           <p>Posted by Tanay Banerjee</p>
           <p className='grey-text'>2nd september 2020</p>
        </div>
       </div>
    )
}

export default ProjectSummary;