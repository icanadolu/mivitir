import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {Authentication} from '../shared/AuthenticationContext';
import { useContext } from 'react';
// import {connect} from 'react-redux';
// import {logoutSuccess}  from '../redux/authActions';


const TopBar=(props)=>{   
      
 const context = useContext(Authentication);   
// const {t,username,isLoggedIn,onlogoutSuccess} = props;

const {t} = props;
const {onlogoutSuccess,state} = context;
const{username,isLoggedIn} = state;


 let links = (
     <ul className='navbar-nav ml-auto'>
         
     <li>
         <Link className='nav-link' to="/login">
             {t('Login')}
         </Link>
     </li>
     <li>
         <Link className='nav-link' to="/signup" > {t('Sign Up')}</Link>
     </li>
 </ul>
 );

 if(isLoggedIn){
     links = (
         <ul className='navbar-nav ml-auto'>
             <li>
                 <Link className="nav-link" to={`/user/${username}`}>
                  {username}
                 </Link>
            
         </li>
             <li className='nav-link' onClick={onlogoutSuccess}>
                 {t('logout')}
         </li>
     </ul>
     )
 }

    return (
        <div className='shadow-sm bg-light mb-2'>
            <nav className="navbar navbar-light  container navbar-expand">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} width='60' alt='mivitir logo'/>Mivitir
                    </Link>
                    
                {links}
            </nav>
    </div>
    
    );

 
}

const TopBarWithTranslation = withTranslation()(TopBar);

// const mapStateToProps = (store)=>{
//     return{
//       isLoggedIn: store.isLoggedIn,
//       username: store.username   
//     }
// }

// const mapDispatchToProps = dispatch =>{
//     return{
//         onlogoutSuccess:()=> dispatch(logoutSuccess())
        
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(TopBarWithTranslation) ;


export default TopBarWithTranslation;