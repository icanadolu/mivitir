import React from "react";
import{signup} from '../api/apiCalls';
import Inputi from "../components/inputi";

class UserSignupPage extends React.Component {

    state={
        username:null,
        displayName:null,
        password: null,
        passwordRepeat: null,
        pendingApiCall:false,
        errors:{}
    }

    onChange=event=>{
        const {name,value} = event.target; 
        const errors = {...this.state.errors}
        errors[name] =undefined;
        this.setState({
            [name]:value,
            errors
        });
    }

   onclickSignup = async event =>{
    event.preventDefault();
    const{username,displayName,password} = this.state;
    const body ={
        username,
        displayName,
        password
    }

    this.setState({pendingApiCall:true});

//   signup(body)
//     .then(response=>{
//         this.setState({pendingApiCall:false});
//     }).catch(error=>{
//         this.setState({pendingApiCall:false})
//     });

try {
    
    const response = await signup(body);
} catch (error) {
   if(error.response.data.validationErrors){
    this.setState({errors:error.response.data.validationErrors});
   }
  
}
this.setState({pendingApiCall:false});
   }

    render() {
        const{pendingApiCall,errors} = this.state;
        const{username,displayName,password} = errors;

        return (
            <div className="container">
                <form>
                <h1 className="text-center">Sign Up</h1>
                
                <Inputi name="username" label="Username" error={username}  onChange={this.onChange} />
                <Inputi name="displayName" label="Display Name" error={displayName}  onChange={this.onChange} />
                <Inputi name="password" label="Password" error={password}  onChange={this.onChange}  type="password"/>
            
               
                
                <div className="form-group">
                    <label>Password Repeat</label>
                    <input className="form-control" name="passwordRepeat" type="password"  onChange={this.onChange}  />
                </div>
                <div className="text-center">
                    <button className="btn btn-primary"
                 disabled={pendingApiCall}
                     onClick={this.onclickSignup}>
                        {pendingApiCall&& <span className="spinner-border spinner-border-sm" ></span>}
                         Sign Up</button>
                </div>
            </form>

            </div>
            
        );
    }
}

export default UserSignupPage;