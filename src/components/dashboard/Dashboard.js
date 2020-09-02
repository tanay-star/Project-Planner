import React from 'react';
//importing components
import ProjectList from '../projects/ProjectList';

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
                    <ProjectList/>
                  </div>
              </div>
           </div>
       )
    }
}

export default Dashboard;