import React from 'react';
// import './App.css';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
//importing components
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Dashboard}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
