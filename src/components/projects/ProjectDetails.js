import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDetails = (props) => {
  // const id = props.match.params.id;
  const { project, auth  } = props; 

  if(!auth.uid) return <Redirect to='/signin'/>

  if( project ){
  return(
      <div className='container section project-details'>
         <div className='card z-depth-0'>
           <div className='card-content'>
             <div className='card-title'>{ project.title }</div>
             <p>{ project.content }</p>
           </div>
         </div>
      </div>
  )
  }
  else{
    return (
      <div className='container center'>
        <p>loading project...</p>
      </div>
    )
  }
}

const mapStateToProps = ( state, ownProps ) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project  = projects ? projects[id] : null; //getting the perticular project from the list of projects.
  return{
    project: project,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps,null),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);