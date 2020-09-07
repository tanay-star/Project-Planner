import React from 'react';
import { Link } from 'react-router-dom';
//importing components
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
//connecting to rdeux
import { connect } from 'react-redux';

const Navbar = (props) => {

   const { auth, profile } = props;
   const links = auth.uid ? <SignedInLinks profile={profile}/> : <SignedOutLinks/>
    return (
        
            <nav className = 'nav-wrapper grey darken-3'>
               <div className='container'>
                  <Link to='/' className='brand-logo left'>MyPlanner</Link>
                  {
                     auth.isLoaded && 
                     links
                  }
               </div>
            </nav>
        
    )
}

const mapStateToProps = (state) => {
   console.log(state);
   return{
     auth : state.firebase.auth,
     profile: state.firebase.profile
   }
}

export default connect(mapStateToProps,null)(Navbar);