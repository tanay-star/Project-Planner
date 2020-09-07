const initState = {
  authError : ''
}

const authReducer = ( state=initState, action ) => {
 switch(action.type){
   case 'LOGIN_ERROR':
     console.log('login error');
     return{
       ...state,
       authError: 'login failed'
     }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return{
        ...state,
        authError:''
      }
    case 'SIGNOUT_SUCCESS':
      console.log('sign-out success');
      return state;
    case 'SIGNUP_SUCCESS':
      console.log('sign-up success');
      return{
        ...state,
        authError: null
      }
    case 'SIGNUP_ERROR':
      console.log('sign-up error');
      return{
        ...state,
        authError: action.err.message
      }  
    default:
      return state;
 }
}

export default authReducer;