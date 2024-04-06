import { Navbar,Container,Nav } from "react-bootstrap";
import { useState,useEffect } from "react";
import logo from '../assests/logo.png'
import social1 from '../assests/social1.png'
import social2 from '../assests/social2.png'
import social3 from '../assests/social3.png'

/*returning function from one line*/
export const NavBar = () =>{
    const [activeLink,setactiveLink]=useState('home');// to find where the user is
    const [scrolled,setscrolled]=useState(false); // to change the header and color of page when user scrolled
    useEffect(()=>{
        const onscroll = () =>{
            if(window.scrollY > 50){   // for the scrolling effect 
                setscrolled(true);
            }
            else{
                setscrolled(false);
            }
        }
        window.addEventListener("scroll",onscroll); // adding eventlistner for scrolling effect
        return () => window.removeEventListener("scroll",onscroll);//remove the listener when event is done
    },[])
    const onupdateactivelink = (value) => {
        setactiveLink(value);
    }
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo"/> {/*adding a logo to the website*/}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> {/*icon in mobile view*/}
            <span className="navbar-toggle-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink ==='home' ? 'active navbar-Link':'navbar-link'} onClick={()=> onupdateactivelink('home')}>Home</Nav.Link>  {/*if the link is active it will show the position if its not it wili just navbar link*/}
              <Nav.Link href="#skills" className={activeLink ==='skills' ? 'active navbar-Link':'navbar-link' } onClick={()=> onupdateactivelink('skills')}>Skills</Nav.Link>
            </Nav>
            <span className="navbar-text"> {/* adding social icons*/}
                <div className="social-icon">
                <a href="#"><img src={social1} alt="" /></a>
                <a href="#"><img src={social2} alt="" /></a>
                <a href="#"><img src={social3} alt="" /></a>
                </div>
                <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}