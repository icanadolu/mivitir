import React, { useState } from "react";
import{signup} from '../api/apiCalls';
import Input from "../components/Input";
import {useTranslation} from 'react-i18next';
import ButtonWithProgress from "../components/ButtonWithProgress";
import { useApiProgress } from "../shared/ApiProgress";
import {useDispatch} from 'react-redux'
import { signupHandler } from "../redux/authActions";


const UserSignupPage =(props)=> {
  const [form,setForm] = useState({
    username:null,
    displayName:null,
    password: null,
    passwordRepeat: null,
});

const [errors,setErrors] =useState({});
const dispatch = useDispatch();




    const onChange=event=>{
      const{t} =props;
        const {name,value} = event.target;
       
      setErrors((previousErrors)=>({...previousErrors,[name]:undefined}))
       setForm((previousForm)=>(
        {
          ...previousForm,
          [name]:value
        }
       )
       );

    }

  const onclickSignup = async event =>{
      event.preventDefault();
      const {history} = props;
      const {push} = history
      const{username,displayName,password} = form;

      const body ={
                username,
                displayName,
                password
            }

     try {
       await dispatch(signupHandler(body));
       push('/');
      
     } catch (error) {
      if(error.response.data.validationErrors){
          setErrors(error.response.data.validationErrors);
      }
     }
       
   }



   const {t} = useTranslation();
   const{username:usernameError,displayName:displayNameError,password:passwordError} = errors;
   const pendingApiCallSignUp = useApiProgress('/api/1.0/users');
   const pendingApiCallLogin = useApiProgress('/api/1.0/auth');

   const{pendingApiCall} = pendingApiCallSignUp || pendingApiCallLogin;
   let passwordRepeatError;
   if(form.password !==form.passwordRepeat){
    passwordRepeatError = t('Password mismatch');
   }

   return (
       <div className="container">
           <form>
           <h1 className="text-center">{t('Sign Up')} </h1>

           <Input name="username" label={t("Username")} error={usernameError}  onChange={onChange} />
           <Input name="displayName" label={t("Display Name")} error={displayNameError}  onChange={onChange} />
           <Input name="password" label={t("Password")} error={passwordError}  onChange={onChange}  type="password"/>
           <Input name="passwordRepeat" label={t("Password Repeat")} error={passwordRepeatError}  onChange={onChange}   type="password"/>

           <div className="text-center">
               <ButtonWithProgress  
                disabled={pendingApiCall || passwordRepeatError !== undefined}
                onClick={onclickSignup}
                pendingApiCall={pendingApiCall}
                text =  {t('Sign Up')}

                   />
           </div>
       </form>

       </div>

   );
   
}

// const UserSignupPageWithApiProgressForSignupRequest = withApiProgress(UserSignupPage,'/api/1.0/users');
// const UserSignupPageWithApiProgressForAuthRequest = withApiProgress(UserSignupPageWithApiProgressForSignupRequest,'/api/1.0/auth');


// export default  UserSignupPageWithApiProgressForAuthRequest;

export default UserSignupPage;
