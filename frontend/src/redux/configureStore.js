import { createStore,applyMiddleware, compose } from 'redux';
import authReducer from './authReducer';
import SecureLS from 'secure-ls';
import thunk from 'redux-thunk';
import { setAuthorizationHeader } from '../api/apiCalls';

// const loggedInState = {
//     isLoggedIn: true,
//     username: 'user1',
//     displayName: 'display1',
//     image: null,
//     password: 'P4ssword',
//   }


const secureLs = new SecureLS();

const getStateFromStorage = () => {
  // const hoaxAuth = localStorage.getItem('hoax-auth');
  const hoaxAuth = secureLs.get('hoax-auth');


  let stateInLocalStorage = {
    isLoggedIn: false,
    username: undefined,
    displayName: undefined,
    image: undefined,
    password: undefined
  }

  if (hoaxAuth) {
    try {

      // stateInLocalStorage = JSON.parse(hoaxAuth);
    
      stateInLocalStorage = hoaxAuth;

    } catch (error) { }
  }
  return stateInLocalStorage;
}

const updateStateInStorage=newState=>{
  // localStorage.setItem('hoax-auth', JSON.stringify(newState));
  secureLs.set('hoax-auth', newState);


}

const configureStore = () => {

  const intialState = getStateFromStorage();
  setAuthorizationHeader(intialState);
  //const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(authReducer, intialState, composeEnhancers(applyMiddleware(thunk)));



  store.subscribe(() => {
    updateStateInStorage(store.getState());
    setAuthorizationHeader(store.getState());
  });

  return store;
}

export default configureStore;