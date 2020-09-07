import React from 'react';

const ProjectSummary = ({project}) => {
    const { title } = project; //destructuring
    return(
        <div className='card z-depth-0 project-summary'>
        <div className='card-content grey-text text-darken-3'>
           <span className='card-title'>{title}</span>
        </div>
       </div>
    )
}

export default ProjectSummary;