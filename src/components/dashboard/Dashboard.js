import React from 'react';
//importing components
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    // constructor(){
    //     super();
    //     this.state={

    //     }
    // }

    

    render(){
       return (
           <div className='dashboard container'>
              <div className='row'>
                  <div className='col m12'>
                    <ProjectList projects={this.props.projects}/>
                  </div>
              </div>
           </div>
       )
    }
}

const  mapStateToProps = (state) => {
    return {
        projects: state.project.projects
    }
}


export default connect( mapStateToProps, null )(Dashboard);