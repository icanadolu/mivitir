import React, { useEffect, useState } from 'react';
import{getUsers} from '../api/apiCalls'
import {useTranslation} from 'react-i18next'
import UserListItem from './UserListItem';
import { useApiProgress } from '../shared/ApiProgress';
//import { useSelector } from 'react-redux';


const UserList=() => {

    const[page,setPage] = useState({
        content:[] ,
        size:3,
        number: 0
    })

    // const {username,password} = useSelector(store =({
    //     username: store.username,
    //     password: store.password
    // }));
    
    const [loadFailure, setLoadFailure] = useState(false);

    const pendingApiCall = useApiProgress('/api/1.0/users?page');//loadusers önce koyuyoruz ki istek olmadan önce dinleyelim
//kullanılan hooklar verilen sırada execute edilyor 

    useEffect(()=>{
        loadUsers();
    },[]);

 

    // componentDidUpdate(previousProps,previousState){
    //     if(previousState.page.number !== this.state.page.number){
    //         this.loadUsers(this.state.page.number)
    //     }
    // }

    const onClickNext = ()=>{
        const nextPage =  page.number +1;
        loadUsers(nextPage);
        // const page ={...this.state.page};
        // page.number = nextPage;
        // this.setState({page})
    }

   const onClickPrevious = ()=>{
        const previousPage =  page.number - 1;
        loadUsers(previousPage);
        // const page ={...this.state.page};
        // page.number = previousPage;
        // this.setState({page})
    }

//    const loadUsers = page=>{
//     setLoadFailure(false);
//         getUsers(page).then(response=>{
//         setPage(response.data);
//         }).catch(error=>{
//             setLoadFailure(true)
//         })
//     }

const loadUsers = async page=>{
     setLoadFailure(false);

     try {
        const response = await getUsers(page);
        setPage(response.data);
       
     } catch (error) {
        setLoadFailure(true);
     }
     
    }

    const {t} = useTranslation();
    const {content : users, last, first} = page;
   
    let actionDiv = (
        <div>
        {first === false && <button className='btn btn-sm btn-light' onClick={onClickPrevious}>{t('Previous')}</button>}
        {last === false && <button className='btn btn-sm btn-light float-right' onClick={onClickNext}>{t('Next')}</button>}
    </div>
    );
    
    if(pendingApiCall){
        actionDiv =(
            <div className="d-flex justify-content-center">
                    <div className="spinner-border text-black-50">
                        <span className="visually-hidden">Loading...</span>
                    </div>
            </div>
        );
    }

    return (
        <div className='card'>
        <h3 className='card-header text-center'>{t('Users')}</h3>
         <div className="list-group">
          {
            users.map((user,index)=>
            (
                <UserListItem  key={user.username}  user={user}/>
                  
            )
                )}  
        </div>
            {actionDiv}
            {loadFailure && <div className='text-center text-danger' >{t('Load Failure')}</div>}
     </div>
    );
   
}

export default UserList;