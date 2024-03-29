import React, { useState } from 'react'

import {Container, Row, Col, UncontrolledCarousel, Card, CardBody, CardTitle, Button, CardSubtitle, CardText  } from 'reactstrap'
import ExploreModel from './exploreModel';





var cardsData = [
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1711444635/strelitzia_plant-bro_chevla.png",
        title: "Object 1",
        subtitle: "Subtitle for Object 1",
        description: "Description for Object 1."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341079/cld-sample.jpg",
        title: "Object 2",
        subtitle: "Subtitle for Object 2",
        description: "Description for Object 2."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341071/samples/animals/kitten-playing.gif",
        title: "Object 3",
        subtitle: "Subtitle for Object 3",
        description: "Description for Object 3."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341070/samples/landscapes/nature-mountains.jpg",
        title: "Object 4",
        subtitle: "Subtitle for Object 4",
        description: "Description for Object 4."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341068/samples/imagecon-group.jpg",
        title: "Object 5",
        subtitle: "Subtitle for Object 5",
        description: "Description for Object 5."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341061/samples/people/boy-snow-hoodie.jpg",
        title: "Unique Object",
        subtitle: "Subtitle for Unique Object",
        description: "Description for Unique Object."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1650341067/samples/ecommerce/accessories-bag.jpg",
        title: "Object 7",
        subtitle: "Subtitle for Object 7",
        description: "Description for Object 7."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1711444635/strelitzia_plant-bro_chevla.png",
        title: "Object 8",
        subtitle: "Subtitle for Object 8",
        description: "Description for Object 8."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398172/Career_progress-rafiki_jxyzgf.png",
        title: "Object 9",
        subtitle: "Subtitle for Object 9",
        description: "Description for Object 9."
    },
    {
        img: "https://res.cloudinary.com/dymmp1vtz/image/upload/v1710398222/Creative_writing-rafiki_csmivd.png",
        title: "Object 10",
        subtitle: "Subtitle for Object 10",
        description: "Description for Object 10."
    }
];


const Home = () => {


    const [exploreModel, setExploreModel] = useState(false)

const toggleExploreModel = ()=> setExploreModel(!exploreModel)

  return (
    <div>
      <h4 className='fst-italic'>Earn Your Money on this platform!</h4>
      {/* carousel */}
      <UncontrolledCarousel
      className='container-md'
        items={[
            {
                altText: 'Slide 1',
                caption: 'Slide 1',
                key: 1,
                src: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1711707846/green-cricket-sports-background-with-illustration-players-golden-trophy-cup_1302-5494_n1lcoz.jpg'
            },
            {
                altText: 'Slide 2',
                caption: 'Slide 2',
                key: 2,
                src: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1711707986/ball-hitting-wicket-stumps_1302-15526_ocgwrd.avif'
            },
            {
                altText: 'Slide 3',
                caption: 'Slide 3',
                key: 3,
                src: 'https://res.cloudinary.com/dymmp1vtz/image/upload/v1711707839/india-vs-pakistan-cricket-match-concept-with-batsman-helmets-golden-trophy-stadium-background_1302-5482_dxrjfv.jpg'
            }
        ]}
        />

        {/* cards */}

        <Container className='container-lg-fluid my-4'>
            <Row className='d-flex justify-content-start'>
                {
                    cardsData.map(data=> 
                        
                        <Col xs={12} sm={12} md={4} xlg={3} >
                                <Card
                                        style={{
                                            // width: '18rem'
                                            // height: '400px'
                                        }}
                                        className='my-2 shadow'
                                        >
                                        <img
                                            alt="Sample"
                                            src={data.img}
                                            maxHeight={60}
                                        />
                                        <CardBody className='text-start'>
                                            <CardTitle tag="h5">
                                            {data.title}
                                            </CardTitle>
                                            <CardSubtitle
                                            className="mb-2 text-muted fw-bolder"
                                            tag="h6"
                                            >
                                            {data.subtitle}
                                            </CardSubtitle>
                                            <CardText tag='small'>
                                                {data.description}
                                            </CardText>
                                            <hr/>
                                            <Button onClick={toggleExploreModel}>
                                            Explore
                                            </Button>
                                        </CardBody>
                                </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>


<ExploreModel toggleExploreModel={toggleExploreModel} exploreModel={exploreModel} />

    </div>
  )
}

export default Home
