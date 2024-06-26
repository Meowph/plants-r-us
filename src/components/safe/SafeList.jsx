import { useEffect, useState } from "react";
import { getAllSafePlants } from "../../services/safeService.jsx";
import { 
  Container,
  Row,
  Col
} from "reactstrap";
import { SafePlant } from "../safe/Safe.jsx";

//Fetches and displays the list of safe plants w/corresponding IMG (URL)
export const SafePlantsList = ({currentUser}) => {
  const [allSafePlants, satAllSafePlants] = useState([])
  const [safeImg, setSafeImg] = useState([])

//Fetches and sorts through safePlants array to get name and URL
  useEffect(() => {
    getAllSafePlants().then((safePlantsArray, plants) => {
      satAllSafePlants(safePlantsArray)
      setSafeImg(plants.map((plants) => plants.URL).slice(0, 9));
    });
  }, []);

  return (
    <main>
<Container>
      <h1>Safe Plant List</h1>
      <Row>
        {allSafePlants.map((Obj) => (
          <Col key={Obj.id} sm="6" style={{ marginBottom: '20px'}}>
            <SafePlant 
            plant={Obj}
            user={currentUser}
             />
          </Col>
        ))}
      </Row>
    </Container>
</main>
  )
}