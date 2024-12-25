
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from "./NavStyledComponent"
import { DiCssdeck } from 'react-icons/di';
import { GiHamburgerMenu } from "react-icons/gi";
import tlogo from "../assets/taxi-logo.jpg";

import { useTheme } from 'styled-components';
import { useState } from "react";
import { Bio } from "../data/Data";



const Navbar = () => {

  const[isOpen , setIsOpen] = useState(false)
  const theme = useTheme()


  return (
    <Nav>
      <NavContainer>
      <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20', cursor: 'pointer' }}>
            <DiCssdeck size="3rem"/><Span>THE TAXI</Span>
          </a>
        </NavLogo>
        {/* <img src={tlogo} alt="taxi-image" /> */}
        <MobileIcon>
          <GiHamburgerMenu 
          onClick={()=>{
            setIsOpen(!isOpen)
          }}/> 

          
        </MobileIcon>
        <NavItems>
         <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Contact us</NavLink>
          <NavLink href='#projects'>How it works!</NavLink>
          <NavLink href='#contact'>Form</NavLink>
        </NavItems>
      
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>

            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>

            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact us</MobileLink>
           
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>How it Works!</MobileLink>
            
            <MobileLink href='#contact' onClick={() => {
              Sign in(!isOpen)
            }}>Contact</MobileLink>
            
          </MobileMenu>
        }
         
      </NavContainer>
    </Nav>
  )
}

export default Navbar
