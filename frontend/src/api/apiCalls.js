import axios from 'axios';


export const signup = (body)=>{
  //   return axios.post('/api/1.0/users',body,{header:{'accept-language': 'eng' }});
   return axios.post('/api/1.0/users',body);
}

export const login = creds =>{
  return axios.post('/api/1.0/auth',{},{auth:  creds});
}

export const changeLanguage = language =>{
  axios.default.headers['accept-language'] = language;
}
