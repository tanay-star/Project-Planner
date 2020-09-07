import React from 'react';
import { Redirect } from 'react-router-dom';
//importing components
import ProjectList from '../projects/ProjectList';
//connectimng redux
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
class Dashboard extends React.Component {

    // constructor(){
    //     super();
    //     this.state={

    //     }
    // }

    

    render(){
       const { projects, auth } = this.props;
       if(!auth.uid) {
           return <Redirect to='/signin'/>
       }
       return (
           <div className='dashboard container'>
              <div className='row'>
                  <div className='col m12'>
                    <ProjectList projects={projects}/>
                  </div>
              </div>
           </div>
       )
    }
}

const  mapStateToProps = (state) => {
    return {
        projects: state.firestore.ordered.projects,
        auth: state.firebase.auth

    }
}


export default compose(
    connect( mapStateToProps, null ),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard);