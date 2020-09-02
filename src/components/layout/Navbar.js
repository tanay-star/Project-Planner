import React from 'react';
import { Link } from 'react-router-dom';
//importing components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => {
    return (
        
            <nav className = 'nav-wrapper grey darken-3'>
               <div className='container'>
                  <Link to='/' className='brand-logo left'>MyPlanner</Link>
                  <SignedInLinks/>
                  <SignedOutLinks/>

               </div>
            </nav>
        
    )
}

export default Navbar;