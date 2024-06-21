import { useEffect, useState } from "react"
import { Profile } from "./Profile.jsx"
import { getUserSafeId, getUserSafePlants } from "../../services/profileService.jsx"
import { useParams } from "react-router-dom"
import { Card, CardBody, CardImg, CardTitle, Col, Container, Row } from "reactstrap"
import { SafePlant } from "../safe/Safe.jsx"
import { getAllSafePlants } from "../../services/safeService.jsx"

//child of profile.jsx... passing info onto this child by profileId
export const ProfileList = ({profileId}) => {
  const [userPlants, setUserPlants] = useState([])
  const [userSafeId, setUserSafeId]= useState([])
  let profileIdNumber = parseInt(profileId)

  // const { safePlantId } = useParams();

  // const [allSafePlants, setAllSafePlants] = useState([])
  // const [safeImg, setSafeImg] = useState([])

  // useEffect(() => {
  //   getAllSafePlants().then((safePlantsArray, plants) => {
  //     setAllSafePlants(safePlantsArray)
  //     setSafeImg(plants.map((plants) => plants.URL).slice(0, 9));
  //   });
  // }, []);

useEffect(() => {
  getUserSafePlants().then(userPlants => {
      let myPlants = userPlants.filter(d => d.userId === profileIdNumber)
      setUserPlants(userPlants)
      setUserSafeId(myPlants)
  })
  }, [])

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
        {/* <ButtonGroup>
          <Button
            color="primary"
            outline
            onClick={handleAddClick}
          >
            Add
            </Button> */}
            {/* </ButtonGroup> */}
        <CardBody className="body">
        <CardTitle>
        <p>Name:</p>{plantObj?.safePlant?.name}
        <br></br>
        <p>Description:</p>{plantObj?.safePlant?.description}
        <br></br>
        <p>Location:</p>{plantObj?.safePlant?.location}
        <br></br>
        </CardTitle>
        
            </CardBody>
    </Card>
            })}
        </article> 
        <button onClick={() => console.log(userPlants)}>User Safe Plants</button>
        <button onClick={() => console.log(userSafeId)}>User Safe Id</button>
    </div>
)
}