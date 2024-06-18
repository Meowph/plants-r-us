import { useEffect, useState } from "react";
import { getAllDeadlyPlants } from "../../services/deadlyService.jsx";
import { 
  Container,
  Row,
  Col
} from "reactstrap";
import { DeadlyPlant } from "./Deadly.jsx";

//Fetches and displays the list of safe plants w/corresponding IMG (URL)
export const DeadlyPlantsList = () => {
  const [allDeadlyPlants, satAllDeadlyPlants] = useState([])
  const [deadlyImg, setDeadlyImg] = useState([])

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
      <h1>Deadly Plant List</h1>
      <Row>
        {allDeadlyPlants.map((Obj) => (
          <Col key={Obj.id}>
            <DeadlyPlant
            plant={Obj}
            key = {Obj.id}
             />
          </Col>
        ))}
      </Row>
    </Container>
</main>
  )
}