import React, { useContext } from "react";
import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { Authentication } from "../shared/AuthenticationContext";
// import {connect} from 'react-redux'

const ProfileCard = (props)=>{
    const context = useContext(Authentication)

   const pathUserName = props.match.params.username;
  
   let message = 'We cannot edit';
   if(pathUserName===context.state.username){
    message = 'We can edit';
   }
    return(
        <div>
                {message}
        </div>
    )
}



// const mapStateToProps = (store)=>{
//     return{
//         loggedInUsername: store.username
//     }
//   }

// export default connect(mapStateToProps)( withRouter(ProfileCard));

export default withRouter(ProfileCard)