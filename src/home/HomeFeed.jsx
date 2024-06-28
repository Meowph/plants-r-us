import { Card, CardBody, CardGroup, CardLink, CardText, CardTitle, ListGroup, ListGroupItem } from "reactstrap"
import "./HomeFeed.css"
import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react"
import { Button, Carousel, Stack } from "react-bootstrap";
import { useState } from "react";

export const Home = () => {
  const initialSlidersState = {
    1: 0,
    2: 0,
    3: 0,
  };

  const [slidersState, setSlidersState] = useState(initialSlidersState);

  const nextSlide = (sliderId, numSlides) =>
    setSlidersState((prev) => {
      const currentIndex = prev[sliderId];
      const newIndex = currentIndex === numSlides - 1 ? 0 : currentIndex + 1;
      return { ...prev, [sliderId]: newIndex };
    });

  const previousSlide = (sliderId, numSlides) =>
    setSlidersState((prev) => {
      const currentIndex = prev[sliderId];
      const newIndex = currentIndex === 0 ? numSlides - 1 : currentIndex - 1;
      return { ...prev, [sliderId]: newIndex };
    });

  return (
    <>
    <h1 style={{
      marginTop:'1rem',
      color:'white'
    }}
    >Plant's-R-Us Hub</h1>
      <Stack gap={3} className="align-items-center justify-content-center min-vh-100">
        {/* First Stack */}
        <h2 style={{ textDecoration: 'underline', marginTop: '2rem', color: 'white' }}><b>Foraging Fun</b></h2>
        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '10px',
              paddingLeft: '10px',
            }}
            onClick={() => previousSlide(1, 3)}
          >
            Previous
          </Button>
          <Carousel style={{ width: "45rem" }} controls={false} indicators interval={null} activeIndex={slidersState[1]}>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://www.incrediblemushrooms.com/images/foraging-basket-800.jpg" alt="Mushroom Hunting Guide" />
                <p className="overlay-text"><a href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia" target="_blank">Mushroom Hunting Guide</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://wvtourism.com/wp-content/uploads/2015/08/038A1143-2-scaled.jpg" alt="Tours & Classes" />
                <p className="overlay-text"><a href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/" target="_blank">Tours & Classes</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://images-pw.pixieset.com/social/page/1691521/d0185c6ab996b0d33d14ce8548a9c6c9338b3e8b5fbe7a9038d80a48a775b508.jpg" alt="Foraging Equipment" />
                <p className="overlay-text"><a href="https://www.thegrizzlyforager.co.uk/essential-foraging-equipment/" target="_blank">Foraging Equipment</a></p>
              </div>
            </Carousel.Item>
          </Carousel>
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
            onClick={() => nextSlide(1, 3)}
          >
            Next
          </Button>
        </Stack>

        {/* Second Stack */}
        <h2 style={{ textDecoration: 'underline', marginTop: '2rem', color: 'white' }}><b>Books For All Levels</b></h2>
        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '10px',
              paddingLeft: '10px',
            }}
            onClick={() => previousSlide(2, 5)}
          >
            Previous
          </Button>
          <Carousel style={{ width: "45rem" }} controls={false} indicators interval={null} activeIndex={slidersState[2]}>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://shop.designist.ie/cdn/shop/files/food-for-free_1_1500x1500_designist_lr_da868967-85b0-48a5-92ee-ff2edaa1d495_512x512.gif?v=1715789618" alt="Mushroom Hunting Guide" />
                <p className="overlay-text"><a href="https://a.co/d/5UjBQda" target="_blank">Food For Free</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://www.foragersharvest.com/uploads/9/2/1/2/92123698/s173203706900984113_p10_i4_w2560.jpeg" alt="The Forager’s Harvest Guide" />
                <p className="overlay-text"><a href="https://a.co/d/4jOOqOT" target="_blank">The Forager’s Harvest Guide</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://p16-va.lemon8cdn.com/tos-maliva-v-ac5634-us/6213fdb054cf47e2bf86a0d43869e6f8~tplv-tej9nj120t-origin.webp" alt="The Forager’s Calendar" />
                <p className="overlay-text"><a href="https://a.co/d/7zHePbG" target="_blank">The Forager’s Calendar</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://static1.squarespace.com/static/63a998547127363d0d51d6b3/63a9b23cacbbcc297ed43e9b/64242bfae41fa91b59308a46/1708523238763/E952829A-E2C9-409C-BF6C-5B301E249690?format=1500w" alt="Wild Magic" />
                <p className="overlay-text"><a href="https://a.co/d/buKojI6" target="_blank">Wild Magic</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://shepherdsongfarm.com/wp-content/uploads/2020/12/Foragers-Harvest-Items-for-SS-49.jpg" alt="Nature’s Garden" />
                <p className="overlay-text"><a href="https://a.co/d/7zHePbG" target="_blank">Nature’s Garden</a></p>
              </div>
            </Carousel.Item>
          </Carousel>
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
            onClick={() => nextSlide(2, 5)}
          >
            Next
          </Button>
        </Stack>

        {/* Third Stack */}
        <h2 style={{ textDecoration: 'underline', marginTop: '2rem', color: 'white' }}><b>More Interesting Resources</b></h2>
        <Stack direction="horizontal" gap={3} className="justify-content-center">
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '10px',
              paddingLeft: '10px',
            }}
            onClick={() => previousSlide(3, 3)}
          >
            Previous
          </Button>
          <Carousel style={{ width: "45rem" }} controls={false} indicators interval={null} activeIndex={slidersState[3]}>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://travel.home.sndimg.com/content/dam/images/travel/fullset/2012/02/22/9e/New-River-Gorge.rend.hgtvcom.1280.960.suffix/1491583255321.jpeg" alt="Nature’s Garden" />
                <p className="overlay-text"><a href="https://wvstateparks.com/places-to-stay/campgrounds/" target="_blank">Parks In WV</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://images-pw.pixieset.com/elementfield/01018995/TGF_Website_Images_141-a2bd79d8.jpg" alt="Nature’s Garden" />
                <p className="overlay-text"><a href="https://modern-forager.com/resources/" target="_blank">Deeper InSight On Equipment</a></p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="carousel-container">
                <img className="d-block w-100" src="https://as2.ftcdn.net/v2/jpg/03/09/29/85/1000_F_309298568_TcVgfYtgwluPSs3k4zrBM0T3E5FLhhI0.jpg" alt="Poisonous Plant" />
                <p className="overlay-text"><a href="http://www.wvpoisoncenter.org/media/2735/whataboutplants.pdf " target="_blank">Poison Center Help</a></p>
              </div>
            </Carousel.Item>
          </Carousel>
          <Button
            style={{
              color: 'green',
              background: 'white',
              border: 'white',
              borderRadius: '20px',
              paddingRight: '20px',
              paddingLeft: '20px',
            }}
            onClick={() => nextSlide(3, 3)}
          >
            Next
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

// export const Home = () => {

//   return (
    //OR THIS STYLE?????????
//     <div className="welcome-container">
//           <CardGroup>
//           <Card 
//           className="first-card"
//           style={{
//             marginTop:'5rem',
//             marginRight:'10rem'
//           }}
//           >
//   <img
//    img-fluid 
//     className="resource-img"
//     alt="Card"
//     src="https://www.travelandleisure.com/thmb/ll3QcBKDnaYSeaVXzlfF__J0UBI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/new-river-gorge-west-virginia-WVREMOTE0421-367f0a1ae7b04174b274cbf45974b5b6.jpg"
//   />
//   <CardBody>
//     <CardTitle tag="h4">
//     Foraging Fun
//     </CardTitle>
//   </CardBody>
//   <ListGroup flush>
//     <ListGroupItem>
//     <CardLink 
//     href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia"
//     target="_blank"
//     >
//       Guide on Mushroom Hunting
//     </CardLink>
//     </ListGroupItem>

//     <ListGroupItem>
//     <CardLink 
//     href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/"
//     target="_blank"
//     >
//       Classes, Groups, & Tours
//     </CardLink>
//     </ListGroupItem>

//     <ListGroupItem>
//     <CardLink 
//     href="https://www.thegrizzlyforager.co.uk/essential-foraging-equipment/"
//     target="_blank"
//     >
//       Everyday Tools
//     </CardLink>
//     </ListGroupItem>
//   </ListGroup>

//   <CardTitle 
//     tag="h4">
//     Books For All Levels
//     </CardTitle>

//   <CardBody>
//     <CardLink 
//     href="https://a.co/d/5UjBQda"
//     target="_blank"
//     >
//       Food For Free
//     </CardLink>

//     <CardLink 
//     href="https://a.co/d/4jOOqOT"
//     target="_blank"
//     >
//       The Forager’s Harvest Guide
//     </CardLink>

//     <CardLink 
//     href="https://a.co/d/7zHePbG"
//     target="_blank"
//     >
//       Nature’s Garden
//     </CardLink>

//     <CardLink 
//     href="https://a.co/d/4dU99CH"
//     target="_blank"
//     >
//       The Forager’s Calendar
//     </CardLink>

//     <CardLink 
//     href="https://a.co/d/buKojI6"
//     target="_blank"
//     >
//       Wild Magic
//     </CardLink>
//   </CardBody>
// </Card>

// <Card 
// style={{
//   marginTop:'5rem',
//   }}
//   >
//   <img
//    img-fluid 
//     className="park-img"
//     alt="Card"
//     src="https://tasteofthesouthmagazine.com/wp-content/uploads/2016/10/WestVirginia.jpg"
//     style={{
//       minHeight:'1rem'
//     }}
//   />
//   <CardBody>
//       <CardTitle tag="h4">
//       Gorgeous Parks and Helpful Resources
//       </CardTitle>
//       </CardBody>
//       <ListGroup flush>
//       <ListGroupItem>
//       <CardLink 
//       href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia"
//       target="_blank"
//       >
//         Guide on Mushroom Hunting
//       </CardLink>
//       </ListGroupItem>

//       <ListGroupItem>
//       <CardLink 
//       href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/"
//       target="_blank"
//       >
//         Classes, Groups, & Tours
//       </CardLink>
//       </ListGroupItem>
//       </ListGroup>
//     </Card>
// </CardGroup>
//       </div>


//MAYBE THIS STYLE??????
{/* <main>
  <h2>Foraging Fun</h2>
<CCarousel controls indicators>
  <CCarouselItem>
    <CImage className="d-block w-100" src="https://www.incrediblemushrooms.com/images/foraging-basket-800.jpg" alt="slide 1"/>
    <CCarouselCaption className="d-none d-md-block">
      <h5>First slide label</h5>
      <p>Some representative placeholder content for the first slide. <a href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia">Mushroom Hunting Guide</a></p>
    </CCarouselCaption>
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100" src="https://wvtourism.com/wp-content/uploads/2015/08/038A1143-2-scaled.jpg" alt="slide 2" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Second slide label</h5>
      <p>Some representative placeholder content for the first slide. <a href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/">Tours & Class</a></p>
    </CCarouselCaption>
  </CCarouselItem>

  <CCarouselItem>
    <CImage className="d-block w-100" src="https://images-pw.pixieset.com/social/page/1691521/d0185c6ab996b0d33d14ce8548a9c6c9338b3e8b5fbe7a9038d80a48a775b508.jpg" alt="slide 3" />
    <CCarouselCaption className="d-none d-md-block">
      <h5>Third slide label</h5>
      <p>Some representative placeholder content for the first slide. <a href="https://www.thegrizzlyforager.co.uk/essential-foraging-equipment/">Foraging Equipment</a></p>
    </CCarouselCaption>
  </CCarouselItem>
</CCarousel>

// {/* Second Carousel */}
// <h2>Books For All Levels</h2>
// <CCarousel controls indicators>

// <CCarouselItem>
//     <CImage className="d-block w-100" src="https://m.media-amazon.com/images/S/aplus-media/sota/0820b71b-1cd1-4aff-9cd9-fa36c9f83f9e.__CR0,0,300,300_PT0_SX300_V1___.png" alt="Food For Free Book" />
//     <CCarouselCaption className="d-none d-md-block">
//       <h5>Second slide label</h5>
//       <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/5UjBQda">Food For Free</a></p>
//     </CCarouselCaption>
//   </CCarouselItem>
//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://www.foragersharvest.com/uploads/9/2/1/2/92123698/s173203706900984113_p2_i7_w427.jpeg" alt="The Forager’s Harvest Guide Book" />
//     <CCarouselCaption className="d-none d-md-block">
//       <h5>Second slide label</h5>
//       <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/4jOOqOT">The Forager’s Harvest Guide</a></p>
//     </CCarouselCaption>
//   </CCarouselItem>

//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/131273262_3546088515481042_8809347350693565312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=k1yY8hoEFmsQ7kNvgHbvlJW&_nc_ht=scontent-ord5-2.xx&oh=00_AYD3RwLS_75s8RqtoYS7D30LXK13Kzh828DbAWoWRXHESg&oe=66A51F6D" alt="The Forager’s Calendar Book" />
//     <CCarouselCaption className="d-none d-md-block">
//       <h5>Second slide label</h5>
//       <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/7zHePbG">The Forager’s Calendar</a></p>
//     </CCarouselCaption>
//   </CCarouselItem>

//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://static1.squarespace.com/static/63a998547127363d0d51d6b3/63a9b23cacbbcc297ed43e9b/64242bfae41fa91b59308a46/1708523238763/E952829A-E2C9-409C-BF6C-5B301E249690?format=1500w" alt="Wild Magic Book" />
//     <CCarouselCaption className="d-none d-md-block">
//       <h5>Second slide label</h5>
//       <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/buKojI6">Wild Magic</a></p>
//     </CCarouselCaption>
//   </CCarouselItem>

//   <CCarouselItem>
//     <CImage className="d-block w-100" src="https://shepherdsongfarm.com/wp-content/uploads/2020/12/Foragers-Harvest-Items-for-SS-49.jpg" alt="Nature’s Garden Book" />
//     <CCarouselCaption className="d-none d-md-block">
//       <h5>Second slide label</h5>
//       <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/7zHePbG">Nature’s Garden</a></p>
//     </CCarouselCaption>
//   </CCarouselItem>
// </CCarousel>
// </main>
//   )
// } */}


// export const Home = () => {

//   return (
//     <main style={{ marginTop: '60px' }}>
//       <h2>Foraging Fun</h2>
//       <CCarousel controls indicators className="foraging-fun-carousel">
//         <CCarouselItem>
//           <CImage className="d-block w-100 foraging-fun-img" src="https://www.incrediblemushrooms.com/images/foraging-basket-800.jpg" alt="slide 1" />
//           <CCarouselCaption className="d-none d-md-block">
//             <h5>First slide label</h5>
//             <p>Some representative placeholder content for the first slide. <a href="https://discover.texasrealfood.com/mushroom-hunting-by-state/west-virginia">Mushroom Hunting Guide</a></p>
//           </CCarouselCaption>
//         </CCarouselItem>
//         <CCarouselItem>
//           <CImage className="d-block w-100 foraging-fun-img" src="https://wvtourism.com/wp-content/uploads/2015/08/038A1143-2-scaled.jpg" alt="slide 2" />
//           <CCarouselCaption className="d-none d-md-block">
//             <h5>Second slide label</h5>
//             <p>Some representative placeholder content for the first slide. <a href="https://eattheplanet.org/foraging-tours-and-classes-in-west-virginia/">Tours & Class</a></p>
//           </CCarouselCaption>
//         </CCarouselItem>
//         <CCarouselItem>
//           <CImage className="d-block w-100 foraging-fun-img" src="https://images-pw.pixieset.com/social/page/1691521/d0185c6ab996b0d33d14ce8548a9c6c9338b3e8b5fbe7a9038d80a48a775b508.jpg" alt="slide 3" />
//           <CCarouselCaption className="d-none d-md-block">
//             <h5>Third slide label</h5>
//             <p>Some representative placeholder content for the first slide. <a href="https://www.thegrizzlyforager.co.uk/essential-foraging-equipment/">Foraging Equipment</a></p>
//           </CCarouselCaption>
//         </CCarouselItem>
//       </CCarousel>

//       <div style={{ marginTop: '40px' }}>
//         <h2>Books For All Levels</h2>
//         <CCarousel controls indicators className="books-carousel">
//           <CCarouselItem>
//             <CImage className="d-block w-100 books-carousel-img" src="https://m.media-amazon.com/images/S/aplus-media/sota/0820b71b-1cd1-4aff-9cd9-fa36c9f83f9e.__CR0,0,300,300_PT0_SX300_V1___.png" alt="Food For Free Book" />
//             <CCarouselCaption className="d-none d-md-block">
//               <h5>First slide label</h5>
//               <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/5UjBQda">Food For Free</a></p>
//             </CCarouselCaption>
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage className="d-block w-100 books-carousel-img" src="https://www.foragersharvest.com/uploads/9/2/1/2/92123698/s173203706900984113_p2_i7_w427.jpeg" alt="The Forager’s Harvest Guide Book" />
//             <CCarouselCaption className="d-none d-md-block">
//               <h5>Second slide label</h5>
//               <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/4jOOqOT">The Forager’s Harvest Guide</a></p>
//             </CCarouselCaption>
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage className="d-block w-100 books-carousel-img" src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/131273262_3546088515481042_8809347350693565312_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=k1yY8hoEFmsQ7kNvgHbvlJW&_nc_ht=scontent-ord5-2.xx&oh=00_AYD3RwLS_75s8RqtoYS7D30LXK13Kzh828DbAWoWRXHESg&oe=66A51F6D" alt="The Forager’s Calendar Book" />
//             <CCarouselCaption className="d-none d-md-block">
//               <h5>Third slide label</h5>
//               <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/7zHePbG">The Forager’s Calendar</a></p>
//             </CCarouselCaption>
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage className="d-block w-100 books-carousel-img" src="https://static1.squarespace.com/static/63a998547127363d0d51d6b3/63a9b23cacbbcc297ed43e9b/64242bfae41fa91b59308a46/1708523238763/E952829A-E2C9-409C-BF6C-5B301E249690?format=1500w" alt="Wild Magic Book" />
//             <CCarouselCaption className="d-none d-md-block">
//               <h5>Fourth slide label</h5>
//               <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/buKojI6">Wild Magic</a></p>
//             </CCarouselCaption>
//           </CCarouselItem>
//           <CCarouselItem>
//             <CImage className="d-block w-100 books-carousel-img" src="https://shepherdsongfarm.com/wp-content/uploads/2020/12/Foragers-Harvest-Items-for-SS-49.jpg" alt="Nature’s Garden Book" />
//             <CCarouselCaption className="d-none d-md-block">
//               <h5>Fifth slide label</h5>
//               <p>Some representative placeholder content for the first slide. <a href="https://a.co/d/7zHePbG">Nature’s Garden</a></p>
//             </CCarouselCaption>
//           </CCarouselItem>
//         </CCarousel>
//       </div>
//     </main>
//   );
// 