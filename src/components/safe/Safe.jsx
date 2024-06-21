import { useNavigate } from "react-router-dom"
import { 
  Button,
  ButtonGroup,
    Card, 
    CardBody, 
    CardImg, 
    CardText, 
    CardTitle 
} from "reactstrap"
import "./Safe.css"
import { AddPlantToProfile } from "../../services/profileService.jsx"
import { useState } from "react"
// import { Navigate } from "react-router-dom"

// Displays individual Safe Plant details
export const SafePlant = ({ plant, user }) => {

  const [userSafePlants, setUserSafePlants] = useState({ })

  const Navigate = useNavigate()
  

  const handleAddClick = (event) => {
    event.preventDefault()
    const plantToPost= {
      userId: user.id,
      safeId: plant.id,
      notes: " "
    }
      AddPlantToProfile(plantToPost).then(() => {
        Navigate(`/profile/${user.id}`);
      })
    }


    
  return (
      <Card>
          {/*Displays plant image */} 
          <CardImg className="safePlant-img" 
        src={plant.URL}
        alt={plant.name}
        style={{
          height: 180
        }}
        top
        width="100%"
        />
        <ButtonGroup>
          <Button
            color="primary"
            outline
            onClick={handleAddClick}
          >
            Add
            </Button>
            </ButtonGroup>
        <CardBody className="body">
        <CardTitle>
        <p>Name:</p>{plant.name}
        <br></br>
        <p>Description:</p>{plant.description}
        <br></br>
        <p>Location:</p>{plant.location}
        <br></br>
        </CardTitle>
        
            </CardBody>
    </Card>
  )
}