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
  CardTitle } from "reactstrap"
import { NoteForm } from "./ProfileForm.jsx"

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

  return (
    <div className="userSafePlants-container">
        <h2>Safe Plants</h2>
        <article className="userPlants">
            {userSafeId.map(plantObj => {
                return <Card>

          <CardImg className="safePlant-img" 
        src={plantObj?.safePlant?.URL}
        alt={plantObj?.safePlant?.name}
        style={{
          height: 50,
        }}
        top
        />
        <CardBody className="body">
        <CardTitle>
        <p>Name:</p>{plantObj?.safePlant?.name}
        </CardTitle>
        <CardText>
        <p>Description:</p>{plantObj?.safePlant?.description}
        <p>Location:</p>{plantObj?.safePlant?.location}
        </CardText> 
          <NoteForm plant={plantObj} />
            </CardBody>
            <Button color="danger" onClick={() => handleSafeDelete(plantObj.id)}>Delete</Button>
    </Card>
            })}
        </article> 

        <h2>Deadly Plants</h2>
        <article className="userPlants">
            {userDeadlyId.map(plantObj => {
                return <Card>

          <CardImg className="deadlyPlant-img" 
        src={plantObj?.deadlyPlant?.URL}
        alt={plantObj?.deadlyPlant?.name}
        style={{
          height: 50,
        }}
        top
        />
        <CardBody className="body">
        <CardTitle>
        <p>Name:</p>{plantObj?.deadlyPlant?.name}
        </CardTitle>
        <CardText>
        <p>Description:</p>{plantObj?.deadlyPlant?.description}
        <p>Location:</p>{plantObj?.deadlyPlant?.location}
        </CardText> 
          <NoteForm plant={plantObj} />
            </CardBody>
            <Button color="danger" onClick={() => handleDeadlyDelete(plantObj.id)}>Delete</Button>
    </Card>
            })}
        </article> 
    </div>
)
}