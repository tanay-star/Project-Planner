import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//importing redux
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
//importing things related to firebase
import { getFirestore, reduxFirestore,  createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './config/fbConfig';
import 'firebase/firestore';
//for render on auth ready
import { useSelector  } from 'react-redux'
import { isLoaded  } from 'react-redux-firebase';


const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true
}



const store = createStore(rootReducer,compose(
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
  reduxFirestore(firebase),
)
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const rrfProps = {
  firebase,
  config: rrfConfig,
  config:  profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div className="center"> <p>Loading Mario Plan...</p></div>;
      return children
}


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
     </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
