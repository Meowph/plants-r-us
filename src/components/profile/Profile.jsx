import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../services/profileService.jsx';
import { ProfileList } from './ProfileList.jsx';

//userParams object must match whatever path= is so it shows up on DOM (located in UserViews) 
export const Profile = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState({ });


  useEffect(( ) => {
     getUserProfile(profileId).then(oneUser => {
      setUser(oneUser)
     });
  }, []);


  return (
    <div>
      <h1 style={{
        textDecoration:'underline',
        color: 'white',
        margin: '3rem',
        textShadow: '2px 2px 2px #9bffe8',
        fontSize: '45px'
      }}>Welcome To {user.username}'s Profile!</h1>
      <ProfileList profileId={profileId}/>
    </div>
  );
};
