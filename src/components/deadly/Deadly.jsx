import { 
  ButtonGroup,
  Button,
  Card, 
  CardBody, 
  CardImg, 
  CardTitle, 
  Row,
  Col,
  CardText
} from "reactstrap"
import "./Deadly.css"
import { AddDeadlyPlantToProfile } from "../../services/profileService.jsx"

// Displays individual Safe Plant details
export const DeadlyPlant = ({ plant, currentUser }) => {

  const handleAddClick = () => {
    const deadlyPlantToPost= {
      userId: currentUser.id,
      deadlyPlantId: plant.id,
      notes: " "
    }
      AddDeadlyPlantToProfile(deadlyPlantToPost)
    }

  
return (
  <Row>
    <Col >
    <Card>
      {/*Displays pant image */} 
      <CardImg className="deadlyPlant-img" 
      src={plant.URL}
      alt={plant.name}
      />
      <CardBody className="body">

      <CardTitle>
      <p>Name:</p>
      </CardTitle>
      {plant.name}
  
      <CardText>
      <p>Description:</p>{plant.description}
      </CardText>
      <CardText>
      <p>Location:</p>{plant.location}
      </CardText>
      </CardBody>
      <ButtonGroup>
          <Button
            color="success"
            outline
            onClick={handleAddClick}
          >
            Add
            </Button>
            </ButtonGroup>
  </Card>
  </Col>
  </Row>
)
}