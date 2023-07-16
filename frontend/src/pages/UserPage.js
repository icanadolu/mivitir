import React from 'react';
import ProfileCard from '../components/ProfileCard.';


const UserPage = () => {
    return (
        <div className='container'>
            <ProfileCard //currentUserPath={this.props.match.params.username}
            />
        </div>
    );
};

export default UserPage;