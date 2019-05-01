import React, { Component } from 'react'
import NavbarHeader from "../navbar/NavbarHeader"
import NavbarLink from "../navbar/NavbarLink"
import NavbarIcon from "../navbar/NavbarIcon"
import styled from "styled-components"

export default class Navbar extends Component {
  state={
    navbarOpen: false,
  }
  handleNavbar = () =>{
    this.setState(()=>{
      return {navbarOpen: !this.state.navbarOpen}
    })
  }
  render(){
    return (
      <NavWrapper>
        <NavbarHeader handleNavbar={this.handleNavbar} />
        <NavbarLink  navbarOpen={this.state.navbarOpen}/>
        <NavbarIcon/>
      </NavWrapper>
    )
  }

}

const NavWrapper = styled.nav`
@media (min-width:768px){
  display:flex;
  align-items:center;
}
`