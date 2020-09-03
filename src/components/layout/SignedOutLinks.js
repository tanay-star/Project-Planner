import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => {
    return(
        <ul className='right'>
          <li><NavLink to='/signup'>SignUp</NavLink></li>
          <li><NavLink to='/signin'>Logint</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;