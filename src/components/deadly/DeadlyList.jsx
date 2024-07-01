import { useEffect, useState } from "react";
import { getAllDeadlyPlants } from "../../services/deadlyService.jsx";
import { 
  Container,
  Row,
  Col
} from "reactstrap";
import { DeadlyPlant } from "./Deadly.jsx";

//Fetches and displays the list of safe plants w/corresponding IMG (URL)
export const DeadlyPlantsList = ({ currentUser }) => {
  const [allDeadlyPlants, satAllDeadlyPlants] = useState([])
  const [deadlyImg, setDeadlyImg] = useState([])
  const [addedPlants, setAddedPlants] = useState([]);

  const handleAddClick = (plantId) => {
    addPlantToUserProfile(currentUser.id, plantId);
    setAddedPlants((prev) => [...prev, plantId]);
  };

//Fetches and sorts through deadlyPlants array to get name and URL
  useEffect(() => {
    getAllDeadlyPlants().then((deadlyPlantsArray, plants) => {
      satAllDeadlyPlants(deadlyPlantsArray)
      setDeadlyImg(plants.map((plants) => plants.URL).slice(0, 9));
    });
  }, []);

  return (
    <main>
      <Container>
        <h1  style={{
        color:'white',
        marginTop: '1rem',
        marginBottom:'4rem',
        textShadow: '2px 2px 2px #9bffe8'
      }}>Deadly Plant List</h1>
        <Row>
          {allDeadlyPlants.map((Obj) => (
            <Col key={Obj.id} sm="6" style={{ marginBottom: '20px'}}>
              <DeadlyPlant
                plant={Obj}
                currentUser={currentUser}
                handleAddClick={handleAddClick}
                isAdded={addedPlants.includes(Obj.id)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </main>
  );
};

