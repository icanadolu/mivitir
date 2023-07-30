import UserSignupPage from "../pages/UserSignupPage";
import ApiProgress from "../shared/ApiProgress";
import LangueageSelector from '../components/LangueageSelector';
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import {HashRouter as Router,Route,Redirect,Switch}  from 'react-router-dom';
import TopBar from "../components/TopBar";
// import {connect} from 'react-redux'
import {useSelector} from 'react-redux'
import React, { Component } from 'react';



const App =()=> {
  
  const {isLoggedIn} =  useSelector((store)=>({
    isLoggedIn: store.isLoggedIn
  }));
  return (
    <div >
        <Router>
          <TopBar/>
            <Switch>
              <Route exact path="/"  component={HomePage} />
              { !isLoggedIn &&  <Route path="/login"  component={LoginPage} />}
              <Route path="/signup"  component={UserSignupPage} />
              <Route path="/user/:username" component={UserPage}/>
              <Redirect to="/"/>
            </Switch>
        </Router>
         <LangueageSelector />
    </div> 
  );
}



// const mapStateToProps = (store)=>{
//   return{
//     isLoggedIn: store.isLoggedIn
//   }
// }


// export default connect(mapStateToProps)(App) ;
export default App ;

