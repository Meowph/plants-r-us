import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export const UserNav = (args) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
         <Navbar {...args}
            color='success'
            expand
            container='fluid'
            fixed='top'
         >
             <NavbarBrand href="/home">Plants-R-Us</NavbarBrand>
             <NavbarToggler onClick={toggle} />
             <Collapse isOpen={isOpen} navbar>
                <Nav className="me-auto" navbar>
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
                        <NavLink href="/home">
                        Flowers
                        </NavLink>
                    </NavItem>    
                    <NavItem>
                        <NavLink href="/safe">
                        Safe Plants
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/distributors">
                        Deadly Plants
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/retailers"
                        >
                        Retailers
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/cart"
                        >
                        My Cart
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/"
                            onClick={() => {
                                localStorage.removeItem("activeUser")
                                }}
                        >
                            <strong>Logout</strong>
                        </NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
  );
}