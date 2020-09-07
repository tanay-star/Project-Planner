import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { deleteProject } from '../../store/actions/projectActions';

class ProjectDetails extends React.Component {
  // const id = props.match.params.id;
  

  handleDelete = e => {
    const { id } = this.props;
    e.preventDefault();
    this.props.deleteProject(id);
    // you can push to dashboard after deleting...
}

  render(){
  const { project, auth, id  } = this.props; 

  if(!auth.uid) return <Redirect to='/signin'/>

  if( project ){
  return(
      <div className='container section project-details'>
         <div className='card z-depth-0'>
           <div className='card-content'>
             <div className='card-title'>{ project.title }</div>
             <p>{ project.content }</p>
           </div>
           <button onClick={this.handleDelete}>Delete</button>
         </div>
      </div>
  )
  }
  else{
    return (
      <div className='red-text center'>
        <p>project deleted</p>
      </div>
    )
  }
}
}

const mapStateToProps = ( state, ownProps ) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project  = projects ? projects[id] : null; //getting the perticular project from the list of projects.
  return{
    project: project,
    auth: state.firebase.auth,
    id: id
  }
}

const mapDispatchToProps = dispatch => {
  return {
      deleteProject: (id) => dispatch(deleteProject(id))
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  firestoreConnect([
    { collection: 'projects' }
  ])
)(ProjectDetails);