import { useEffect, useState } from "react";
import { 
  DeleteDeadlyPlant, 
  DeleteSafePlant, 
  getUserDeadlyPlants, 
  getUserSafePlants 
} from "../../services/profileService.jsx";
import { 
  Button, 
  ButtonGroup, 
  Card, 
  CardBody, 
  CardImg, 
  CardText, 
  Col, 
  Row 
} from "reactstrap";
import "./Profile.css";

export const ProfileList = ({ profileId }) => {
  const [userPlants, setUserPlants] = useState([]);
  const [userSafeId, setUserSafeId]= useState([]);
  const [userDeadlyId, setUserDeadlyId]= useState([]);
  const [userDeadlyPlants, setUserDeadlyPlants] = useState([]);
  let profileIdNumber = parseInt(profileId);

  useEffect(() => {
    getUserSafePlants().then(userPlants => {
      let myPlants = userPlants.filter(d => d.userId === profileIdNumber);
      setUserPlants(userPlants);
      setUserSafeId(myPlants);
    });
  }, []);

  useEffect(() => {
    getUserDeadlyPlants().then(badPlants => {
      let myDeadlyPlants = badPlants.filter(d => d.userId === profileIdNumber);
      setUserDeadlyPlants(badPlants);
      setUserDeadlyId(myDeadlyPlants);
    });
  }, []);

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
        <h2 style={{ border: 'thick double, green', margin: '30px', padding: '15px', background: '#fff5f6'}}>Safe Plants</h2>
        <Row className="plant-cards">
          {userSafeId.map(plantObj => (
            <Col xs="12" md="6" key={plantObj.id}>
              <Card body style={{ display: 'flex', flexDirection: 'row', minHeight: '400px', minWidth: '200px', backgroundColor: '#fdf9f3', marginBottom: '5rem' }}>
                <Col md="4" style={{ padding: 0 }}>
                  <CardImg
                    className="safePlant-img"
                    src={plantObj?.safePlant?.URL}
                    alt={plantObj?.safePlant?.name}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </Col>
                <Col md="8" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                  <CardBody className="body" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>
                      <CardText>
                        <p><b>Name:</b> {plantObj?.safePlant?.name}</p>
                      </CardText>
                      <CardText>
                        <p><b>Description:</b> {plantObj?.safePlant?.description}</p>
                      </CardText>
                      <CardText>
                        <p><b>Location:</b> {plantObj?.safePlant?.location}</p>
                      </CardText>
                    </div>
                    <div style={{ marginTop: 'auto' }}>
                      <ButtonGroup>
                        <Button
                          color="success"
                          outline
                          onClick={() => confirmDelete(plantObj.id, true)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
          <br></br>
          <p style={{ borderTop: '8px solid #bbb', borderRadius: '5px'}}></p>

      <div className="plant-section">
        <h2 style={{ border: 'thick double, green', margin: '5rem 0 60px', padding: '15px',  background: '#fff5f6'}}>Deadly Plants</h2>
        <Row className="plant-cards">
          {userDeadlyId.map(plantObj => (
            <Col xs="12" md="6" key={plantObj.id}>
              <Card body style={{ display: 'flex', flexDirection: 'row', minHeight: '400px', minWidth: '200px',  backgroundColor: '#fdf9f3'}}>
                <Col md="4" style={{ padding: 0 }}>
                  <CardImg
                    className="deadlyPlant-img"
                    src={plantObj?.deadlyPlant?.URL}
                    alt={plantObj?.deadlyPlant?.name}
                    style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                  />
                </Col>
                <Col md="8" style={{ padding: 0, display: 'flex', flexDirection: 'column' }}>
                  <CardBody className="body" style={{ flex: 1, display: 'flex', flexDirection: 'column'}}>
                    <div style={{ flex: 1 }}>
                      <CardText>
                        <p><b>Name:</b> {plantObj?.deadlyPlant?.name}</p>
                      </CardText>
                      <CardText>
                        <p><b>Description:</b> {plantObj?.deadlyPlant?.description}</p>
                      </CardText>
                      <CardText>
                        <p><b>Location:</b> {plantObj?.deadlyPlant?.location}</p>
                      </CardText>
                    </div>
                    <div style={{ marginTop: 'auto' }}>
                      <ButtonGroup>
                        <Button
                          color="success"
                          outline
                          onClick={() => confirmDelete(plantObj.id, false)}
                        >
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Col>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
