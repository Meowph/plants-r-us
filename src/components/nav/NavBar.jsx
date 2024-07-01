import React, { useState } from 'react';
import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import "./NavBar.css"

export const UserNav = (args) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const localPlantUser = localStorage.getItem("activeUser")
  const plantUserObject = JSON.parse(localPlantUser)

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Nav style={{
      width: '100%',
      zIndex: '1000',
      color: 'black'
    }}
    fixed 
    fill 
    variant="top" 
    className="sticky-nav">
      <NavItem>
        <NavLink href="/home" active className="nav-link">
          <img
            src="../public/images/logo.jpeg"
            alt="Fern Logo"
            className="fern-logo"
            style={{
              height: '2rem',
              width: '2rem',
              marginRight: '5px',
              backgroundColor: 'pink'
            }}
          />
          Plants-R-Us
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret>
          Which One?
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/safe">Safe Plants</DropdownItem>
          <DropdownItem href="/deadly">Deadly Plants</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href={`/profile/${plantUserObject.id}`} className="nav-link">
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/chat" className="nav-link">
          Messages
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/posts" className="nav-link">
          Posts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/parks" className="nav-link">
          Parks
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login" className="nav-link">
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
};