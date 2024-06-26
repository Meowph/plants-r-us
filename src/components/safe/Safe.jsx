import { 
  Button,
  ButtonGroup,
    Card, 
    CardBody, 
    CardImg,
    CardTitle 
} from "reactstrap"
import "./Safe.css"
import { AddPlantToProfile } from "../../services/profileService.jsx"

// Displays individual Safe Plant details
export const SafePlant = ({ plant, user }) => {

  const handleAddClick = () => {
    const plantToPost= {
      userId: user.id,
      safePlantId: plant.id,
      notes: " "
    }
      AddPlantToProfile(plantToPost)
      //   Navigate(`/profile/${user.id}`);
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
            color="success"
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