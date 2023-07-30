import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {useDispatch,useSelector} from 'react-redux';
import {logoutSuccess}  from '../redux/authActions';


const TopBar=(props)=>{   
      
const {t} = useTranslation();   
const {username,isLoggedIn} = useSelector((store)=>({
    isLoggedIn: store.isLoggedIn,
    username: store.username   
}
));

const dispatch = useDispatch();

const onlogoutSuccess =()=>{
    dispatch(logoutSuccess());
}

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
        <li className='nav-link' onClick={onlogoutSuccess}  >
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

// export default connect(mapStateToProps,mapDispatchToProps)(TopBar) ;


export default TopBar;


