import React from "react";
// import { withRouter } from "react-router-dom/cjs/react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom";

import {useSelector} from 'react-redux'

const ProfileCard = (props)=>{
  const {username : loggedInUsername} = useSelector((store)=>({username: store.username}));
  const routeParams = useParams();

    // const pathUserName = props.match.params.username;
    const pathUserName = routeParams.username;

  
   let message = 'We cannot edit';
   if(pathUserName===loggedInUsername){
    message = 'We can edit';
   }
    return(
        <div>
                {message}
        </div>
    )
}



// export default  withRouter(ProfileCard);
export default  ProfileCard;


