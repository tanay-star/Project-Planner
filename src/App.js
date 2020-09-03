import React from 'react';
// import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//importing components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/project/:id' component={ProjectDetails}/>
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/create' component={CreateProject} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
