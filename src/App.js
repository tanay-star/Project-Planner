import React from 'react';
// import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//importing components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route exact path='/project/:id' component={ProjectDetails}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
