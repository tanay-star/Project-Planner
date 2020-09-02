import React from 'react';
//importing components
import ProjectSummary from './ProjectSummary';

const ProjectList = () => {

    return(
        <div className='project-list section'>
          <ProjectSummary/>
          <ProjectSummary/>
          <ProjectSummary/>
        </div>
    )
}

export default ProjectList;