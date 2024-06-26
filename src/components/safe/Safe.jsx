import { 
  Button,
  ButtonGroup,
    Card, 
    CardBody, 
    CardImg,
    CardText,
    Col,
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
        <Card body style={{ display: 'flex', flexDirection: 'row', minHeight: '200px', minWidth: '200px' }}>
            {/*Displays plant image */} 
            <Col md="4" style={{ padding: 0 }}>
            <CardImg className="safePlant-img" 
          src={plant.URL}
          alt={plant.name}
          style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Col>
        <Col md="8" style={{ padding: 0 }}>
        <CardBody className="body">
            <CardText>
              <p><b>Name:</b> {plant.name}</p>
            </CardText>
            <CardText>
              <p><b>Description:</b> {plant.description}</p>
            </CardText>
            <CardText>
              <p><b>Location:</b> {plant.location}</p>
            </CardText>
          <ButtonGroup>
            <Button
              color="success"
              outline
              onClick={handleAddClick}
            >
              Add
              </Button>
              </ButtonGroup>
        </CardBody>
        </Col>
    </Card>
  )
}