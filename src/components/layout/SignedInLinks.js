import React from 'react';
import { NavLink } from 'react-router-dom';
//connecting with redux
import { connect } from 'react-redux';
import { signout } from '../../store/actions/authActions';

const SignedInLinks = (props) => {
    return(
        <ul className='right'>
          <li><NavLink to='/create'>New Project</NavLink></li>
          <li><a onClick={props.signout}>Log Out</a></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return{
    signout: () => dispatch(signout())
  }
}
export default connect(null,mapDispatchToProps)(SignedInLinks);