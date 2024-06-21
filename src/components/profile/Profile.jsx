import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getUserProfile } from '../../services/profileService.jsx';
import { 
  Card, 
  CardBody, 
  CardTitle 
} from 'reactstrap';

//userParams object must match whatever path= is so it shows up on DOM (located in UserViews) 
export const Profile = () => {
  const { profileId } = useParams();
  const [user, setUser] = useState({ });

  useEffect(( ) => {
     getUserProfile(profileId).then(oneUser => {
      setUser(oneUser)
     });
  }, [profileId]);

  return (
    <div>
      <h1>{user.username}'s Profile</h1>
      <h2>Plants</h2>
      <div>
        {user.plants?.map(plant => (
          <Card key={plant.id}>
            <CardBody>
              <CardTitle>{plant.name}</CardTitle>
              <img 
              src={plant.URL} 
              alt={plant.name} 
              style={{ height: 180 }} 
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
};
