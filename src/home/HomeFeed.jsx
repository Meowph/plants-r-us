import { Card, CardBody, CardGroup, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap"

export const Home = () => {
  return (
    <div className="welcome-container">
          {/* <h1>
              <span>Plants-R-Us</span>
          </h1> */}
          {/* <div>Brought you to by: 
            <br></br>
              The crazy person making this app
          </div> */}
          <CardGroup>
          <Card 
          style={{
            marginTop:'5rem',
            marginRight:'10rem'
          }}
          >
  <img
   img-fluid 
    className="resource-img"
    alt="Card"
    src="https://www.travelandleisure.com/thmb/ll3QcBKDnaYSeaVXzlfF__J0UBI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-river-gorge-west-virginia-WVREMOTE0421-367f0a1ae7b04174b274cbf45974b5b6.jpg"
  />
  <CardBody>
    <CardTitle tag="h4">
    Foraging Fun In WV
    </CardTitle>
    {/* <p className="p">
      <i>Follow These Links For More Info</i>
      </p> */}
    {/* <CardText>
      Foraging In WV
    </CardText> */}
  </CardBody>
  <ListGroup flush>
    <ListGroupItem>
    <CardLink 
    href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia"
    target="_blank"
    >
      Guide on Mushroom Hunting
    </CardLink>
    </ListGroupItem>

    <ListGroupItem>
    <CardLink 
    href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/"
    target="_blank"
    >
      Classes, Groups, & Tours
    </CardLink>
    </ListGroupItem>

    <ListGroupItem>
    <CardLink 
    href="https://www.thegrizzlyforager.co.uk/essential-foraging-equipment/"
    target="_blank"
    >
      Everyday Tools
    </CardLink>
    </ListGroupItem>
  </ListGroup>

  <CardTitle 
    tag="h4">
    Books For All Levels
    </CardTitle>

  <CardBody>
    <CardLink 
    href="https://a.co/d/5UjBQda"
    target="_blank"
    >
      Food For Free
    </CardLink>

    <CardLink 
    href="https://a.co/d/4jOOqOT"
    target="_blank"
    >
      The Forager’s Harvest Guide
    </CardLink>

    <CardLink 
    href="https://a.co/d/7zHePbG"
    target="_blank"
    >
      Nature’s Garden
    </CardLink>

    <CardLink 
    href="https://a.co/d/4dU99CH"
    target="_blank"
    >
      The Forager’s Calendar
    </CardLink>

    <CardLink 
    href="https://a.co/d/buKojI6"
    target="_blank"
    >
      Wild Magic
    </CardLink>
  </CardBody>
</Card>

<Card 
style={{
    marginTop:'5rem',
  }}
  >
  <img
   img-fluid 
    className="park-img"
    alt="Card"
    src="https://tasteofthesouthmagazine.com/wp-content/uploads/2016/10/WestVirginia.jpg"
  />
  <CardBody>
      <CardTitle tag="h4">
      Gorgeous Parks To Visit In WV
      </CardTitle>
      </CardBody>
      <ListGroup flush>
      <ListGroupItem>
      <CardLink 
      href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia"
      target="_blank"
      >
        Guide on Mushroom Hunting
      </CardLink>
      </ListGroupItem>

      <ListGroupItem>
      <CardLink 
      href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/"
      target="_blank"
      >
        Classes, Groups, & Tours
      </CardLink>
      </ListGroupItem>
      </ListGroup>
    </Card>
</CardGroup>
      </div>
  )
}