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
import { AddDeadlyPlantToProfile } from "../../services/profileService.jsx"

// Displays individual Deadly Plant details
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
      <Card body style={{ display: 'flex', flexDirection: 'row', minHeight: '400px', minWidth: '200px' }}>
        {/* Displays plant image */}
        <Col md="4" style={{ padding: 0 }}>
          <CardImg
            className="deadlyPlant-img"
            src={plant.URL}
            alt={plant.name}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Col>
        <Col md="8" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
          <CardBody className="body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1 }}>
            <CardText>
              <p><b>Name:</b> {plant.name}</p>
            </CardText>
            <CardText>
              <p><b>Description:</b> {plant.description}</p>
            </CardText>
            <CardText>
              <p><b>Location:</b> {plant.location}</p>
            </CardText>
            </div>
            <div style={{ marginTop: 'auto' }}>
            <ButtonGroup>
              <Button
                color="success"
                outline
                onClick={handleAddClick}
              >
                Add
              </Button>
            </ButtonGroup>
            </div>
          </CardBody>
        </Col>
      </Card>
    );
  };
  
  