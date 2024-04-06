import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from '../assests/images-2.png'
import reactimg from '../assests/react1.png';
import javaimg from '../assests/Java_logo.png';
import netimg from '../assests/square.png';
export const Skills =() =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    
      return (
        <section className="skill" id="skills">
        <Container>
        <Row>
        <Col>
        <div className="skill-bx">
        <h2>Skills</h2>
        <p> A skilled software developer with expertise in React, Java, JavaScript, and .NET. Proficient in creating dynamic UIs, robust applications, and high-performance web services. Excels in delivering full-stack solutions, merging front-end innovation with back-end functionality, ensuring seamless, efficient user experiences across diverse platforms.</p>
        <Carousel responsive={responsive}/*using the responsive thing that in above */
        infinite={true} className="skill-slider">
        <div className="item">
        <img src={reactimg} alt="image"/>
        <h5> React</h5></div>
        <div className="item">
        <img src={netimg} alt="image"/>
        <h5> .Net</h5></div>
        <div className="item">
        <img src={image1} alt="image"/>
        <h5> JS</h5></div><div className="item">
        <img src={javaimg}alt="image"/>
        <h5> Java</h5></div>
        </Carousel>

        </div>
          
        </Col>

        </Row>
        </Container>
        </section>
      )

}