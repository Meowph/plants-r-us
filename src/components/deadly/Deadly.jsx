// import { useNavigate } from "react-router-dom"
import { 
  Card, 
  CardBody, 
  CardImg, 
  CardText, 
  CardTitle 
} from "reactstrap"
import "./Deadly.css"

// Displays individual Safe Plant details
export const DeadlyPlant = ({ plant }) => {

  // const Navigate = useNavigate()
  
return (
    <Card //style={{ 
  //     width: '20rem',  
  //     margin: '10px' 
  //     }}
      >
      <CardBody className="body">
      <CardTitle 
      // style = {{
      //     marginBottom:"2rem"
      // }}
      >
      <p>Name:</p>{plant.name}
      <br></br>
      <p>Description:</p>{plant.description}
      <br></br>
      <p>Location:</p>{plant.location}
      <br></br>
      </CardTitle>
      
      {/*Displays pant image */} 
       <CardImg className="deadlyPlant-img" 
       /* style={{ 
          height:'13rem',
          width:'13rem',
          alignItems:'center'
      {/* }} */
      variant="top" 
      src={plant.URL}
      alt={plant.name}
      />
       {/* <CardText style = {{
          marginTop:"2rem"
      }}>
          <a 
          href=""
          onClick={() =>{
              Navigate(`/safe/${plant.id}`)}}
          >
              Details
          </a>
      </CardText>  */}
      </CardBody>
  </Card>
)
}