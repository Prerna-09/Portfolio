
import { Nav, NavLink, NavContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileLink } from "./NavStyledComponent"
import { DiCssdeck } from 'react-icons/di';
import { GiHamburgerMenu } from "react-icons/gi";
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
            <DiCssdeck size="3rem"/><Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <GiHamburgerMenu 
          onClick={()=>{
            setIsOpen(!isOpen)
          }}/> 

          
        </MobileIcon>
        <NavItems>
         <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#contact'>Contact</NavLink>
        </NavItems>
      
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>

            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>

            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
           
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            
            <MobileLink href='#contact' onClick={() => {
              setIsOpen(!isOpen)
            }}>Contact</MobileLink>
            
          </MobileMenu>
        }
         
      </NavContainer>
    </Nav>
  )
}

export default Navbar
