import axios from 'axios';


export const signup = (body)=>{
  //   return axios.post('/api/1.0/users',body,{header:{'accept-language': 'eng' }});
   return axios.post('/api/1.0/users',body);
}

export const login = creds =>{
  return axios.post('/api/1.0/auth',{},{auth:  creds});
}

export const changeLanguage = language =>{
  axios.defaults.headers['accept-language'] = language;
}


export const getUsers = (page = 0,size = 3,isLoggedIn)=>{
  return axios.get(`/api/1.0/users?page=${page}&size=${size}` );
}

export const setAuthorizationHeader = ({username, password,isLoggedIn}) =>{
if(isLoggedIn){ 
  const authorizatonHeaderValue = `Basic ${btoa(username+':'+password)}`;
  axios.defaults.headers['Authorization']  =authorizatonHeaderValue;
}else{
  delete axios.defaults.headers['Authorization'];
}
  
}



