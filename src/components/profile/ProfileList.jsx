import { useEffect, useState } from "react"
import { 
  DeleteDeadlyPlant, 
  DeleteSafePlant, 
  getUserDeadlyPlants, 
  getUserSafePlants } from "../../services/profileService.jsx"
import { 
  Button, 
  Card, 
  CardBody, 
  CardImg, 
  CardText, 
  CardTitle, 
  Col, 
  Row} from "reactstrap"
import { ProfileForm } from "./ProfileForm.jsx"
import "./Profile.css"
import { DeadlyProfileForm } from "./DeadlyProfileForm.jsx"

//child of profile.jsx... passing info onto this child by profileId
export const ProfileList = ({ profileId }) => {
  const [userPlants, setUserPlants] = useState([])
  const [userSafeId, setUserSafeId]= useState([])
  const [userDeadlyId, setUserDeadlyId]= useState([])
  const [userDeadlyPlants, setUserDeadlyPlants] = useState([])
  let profileIdNumber = parseInt(profileId)

useEffect(() => {
  getUserSafePlants().then(userPlants => {
      let myPlants = userPlants.filter(d => d.userId === profileIdNumber)
      setUserPlants(userPlants)
      setUserSafeId(myPlants)
  })
  }, [])

  useEffect(() => {
    getUserDeadlyPlants().then(badPlants => {
        let myDeadlyPlants = badPlants.filter(d => d.userId === profileIdNumber)
        setUserDeadlyPlants(badPlants)
        setUserDeadlyId(myDeadlyPlants)
    })
    }, [])

  const handleSafeDelete = (plantId) => {
    DeleteSafePlant(plantId).then(() => {
      setUserSafeId(userSafeId.filter(plant => plant.id !== plantId));
    });
  };

  const handleDeadlyDelete = (plantId) => {
   DeleteDeadlyPlant(plantId).then(() => {
    setUserDeadlyId(userDeadlyId.filter(plant => plant.id !== plantId));
    });
  };

  // Function to confirm deletion
  const confirmDelete = (id, isSafe) => {
    const confirmMessage = isSafe
      ? 'Are you sure you want to delete this Safe Plant from your profile?'
      : 'Are you sure you want to delete this Deadly Plant from your profile?';

    if (window.confirm(confirmMessage)) {
      if (isSafe) {
        handleSafeDelete(id);
      } else {
        handleDeadlyDelete(id);
      }
    }
  };

  return (
    <div className="userPlants-container">
      <div className="plant-section">
        <h2>Safe Plants</h2>
        <div className="plant-cards">
          {userSafeId.map(plantObj => (
            <Card className="plant-card" key={plantObj.id}>
              <CardImg
                src={plantObj?.safePlant?.URL}
                alt={plantObj?.safePlant?.name}
              />
              <CardBody className="plant-card-body">
                <CardTitle className="plant-card-title">
                  <p><b>Name:</b> {plantObj?.safePlant?.name}</p>
                </CardTitle>
                <CardText className="plant-card-text">
                  <p><b>Description:</b> {plantObj?.safePlant?.description}</p>
                  <p><b>Location:</b> {plantObj?.safePlant?.location}</p>
                </CardText>

                <ProfileForm plant={plantObj}/>

                <Button color="danger" onClick={() => confirmDelete(plantObj.id, true)}>Delete</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      <div className="plant-section">
        <h2>Deadly Plants</h2>
        <div className="plant-cards">
          {userDeadlyId.map(plantObj => (
            <Card className="plant-card" key={plantObj.id}>
              <CardImg
                src={plantObj?.deadlyPlant?.URL}
                alt={plantObj?.deadlyPlant?.name}
              />
              <CardBody className="plant-card-body">
                <CardTitle className="plant-card-title">
                  <p><b>Name:</b> {plantObj?.deadlyPlant?.name}</p>
                </CardTitle>
                <CardText className="plant-card-text">
                  <p><b>Description:</b> {plantObj?.deadlyPlant?.description}</p>
                  <p><b>Location:</b> {plantObj?.deadlyPlant?.location}</p>
                </CardText>

                <DeadlyProfileForm otherPlant={plantObj}/>

                <Button color="danger" onClick={() => confirmDelete(plantObj.id, false)}>Delete</Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

//prop = param... {} of prop what is being called (info being used HAS to match)