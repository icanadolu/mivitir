import { createStore } from 'redux';
import authReducer from './authReducer';

const loggedInState = {
    isLoggedIn: true,
    username: 'user1',
    displayName: 'display1',
    image: null,
    password: 'P4ssword',
  }

  const configureStore = ()=>{
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
    return createStore(authReducer,loggedInState,composeEnhancers);
  }

  export default configureStore;