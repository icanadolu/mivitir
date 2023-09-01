import React, { Component } from 'react';
import{getUsers} from '../api/apiCalls'
import {withTranslation} from 'react-i18next'
import UserListItem from './UserListItem';


class UserList extends Component {

    state={
        page:{
           content:[] ,
           size:3,
           number: 0
        }
    }


    componentDidMount(){
        this.loadUsers();
    }

    // componentDidUpdate(previousProps,previousState){
    //     if(previousState.page.number !== this.state.page.number){
    //         this.loadUsers(this.state.page.number)
    //     }
    // }

    onClickNext = ()=>{
        const nextPage =  this.state.page.number +1;
        this.loadUsers(nextPage);
        // const page ={...this.state.page};
        // page.number = nextPage;
        // this.setState({page})
    }

    onClickPrevious = ()=>{
        const previousPage =  this.state.page.number - 1;
        this.loadUsers(previousPage);
        // const page ={...this.state.page};
        // page.number = previousPage;
        // this.setState({page})
    }

    loadUsers = page=>{
        getUsers(page).then(response=>{
            this.setState({
                page: response.data
            })
        })
    }

    render() {
        const {t} = this.props;
        const {content : users, last, first} = this.state.page;
       
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
            <div>
                {first === false && <button className='btn btn-sm btn-light' onClick={this.onClickPrevious}>{t('Previous')}</button>}
                {last === false && <button className='btn btn-sm btn-light float-right' onClick={this.onClickNext}>{t('Next')}</button>}
            </div>
         </div>
        );
    }
}

export default withTranslation()(UserList) ;