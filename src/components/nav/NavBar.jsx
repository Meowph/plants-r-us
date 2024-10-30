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
    }}
    fixed 
    fill 
    variant="top" 
    className="sticky-nav">
      <NavItem>
        <NavLink href="/home" active className="nav-link" style={{
          color: 'black'
        }}>
          <img
            src="../images/logo.jpeg"
            alt="Fern Logo"
            className="fern-logo"
            style={{
              height: '2rem',
              width: '2rem',
              marginRight: '5px',
            }}
          />
          Plants-R-Us
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle nav caret style={{
          color: 'black',
        }}>
          Which One?
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/safe" style={{
          color: 'black',
        }}>Safe Plants</DropdownItem>
          <DropdownItem href="/deadly" style={{
          color: 'black',
        }}>Deadly Plants</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href={`/profile/${plantUserObject.id}`} className="nav-link" style={{
          color: 'black',
        }}>
          Profile
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/chat" className="nav-link" style={{
          color: 'black',
        }}>
          Messages
        </NavLink>
      </NavItem>
      {/* <NavItem>
        <NavLink href="/posts" className="nav-link" style={{
          color: 'black',
        }}>
          Posts
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/parks" className="nav-link" style={{
          color: 'black',
        }}>
          Parks
        </NavLink>
      </NavItem> */}
      <NavItem>
        <NavLink href="/login" className="nav-link" style={{
          color: 'black',
        }}>
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
};