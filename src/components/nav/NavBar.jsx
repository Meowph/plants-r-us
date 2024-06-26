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
    <Nav 
    tabs
    variant="top"
    className="sticky-nav"
    >
      <NavItem>
        <NavLink 
        href="/home" 
        active
        src="">
        Plants-R-Us
        </NavLink>
      </NavItem>
      <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle color="dark"nav caret>
          Which One?
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem href="/safe">Safe Plants</DropdownItem>
          <DropdownItem href="/deadly">Deadly Plants</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <NavItem>
        <NavLink href={`/profile/${plantUserObject.id}`}>Profile</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/messages">Messages</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/posts">Posts</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/parks">Parks</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="/login">
          Logout
        </NavLink>
      </NavItem>
    </Nav>
  );
}
