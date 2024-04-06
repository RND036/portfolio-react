import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap"; 
import { ArrowRightCircle } from "react-bootstrap-icons";
import heading from '../assests/heading.png'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0); // State to track the index of the word to display
    const [isDeleting, setIsDeleting] = useState(false); // State to track if deleting animation is in progress
    const toRotate = ["Full Stack Developer", "Software Developer", "Software Designer"]; // Array of words to rotate
    const [text, setText] = useState(''); // Current text to display
    const [delta, setDelta] = useState(300 - Math.random() * 100); // Time between each letter addition/removal
    const period = 2000; // Time to wait before starting to delete the word

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker); // Cleanup function to clear the interval when component unmounts
        };
    }, [text]); // Run effect when text changes

    const tick = () => {
        let i = loopNum % toRotate.length; // Calculate index to display based on loopNum and array length
        let fullText = toRotate[i]; // Get the word from the array
        let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1); // Update text by adding/removing a letter

        setText(updateText); // Update state with new text

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2); // Decrease time between each letter if deleting
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true); // Start deleting if text is fully displayed
            setDelta(period); // Set delta to period to wait before starting to delete
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false); // Stop deleting if text is fully deleted
            setLoopNum(loopNum + 1); // Move to the next word
            setDelta(500); // Reset delta for smooth transition
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center" style={{paddingTop:"20%"}}>
                    <Col xs={12} md={6} xl={7}>{/* Set column widths for different screen sizes */}
                        <span className="tagline">Welcome To My Portfolio</span>
                        <h1>{`Hi I'm Ravishka `}<span className="wrap">{text}</span></h1>
                        <p>I'm a positive and experienced IT professional with over two years of freelance experience on platforms like Fiverr. Currently, I'm strategically managing projects to meet financial targets while pursuing an undergraduate degree in Software Engineering at Staffordshire University. My academic focus emphasizes software engineering fundamentals, complemented by practical knowledge and active participation in individual and group projects. I've also completed a certificate in software engineering at NIBM, showcasing my dedication to continuous learning and staying updated with industry trends. My ultimate goal is to become a versatile professional with a forward-thinking approach, capable of making significant contributions to the ever-evolving field of technology</p>
                        <button onClick={() => console.log('connect')} className="bg-dark rounded-pill">Let's Connect<ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>{/* Set column widths for different screen sizes */}
                        <img src={heading} alt="Header Img" />{/* Corrected image path */}
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
