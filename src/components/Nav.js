import React, { useState } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

export default function GameNav () {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
    <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Would You Rather?</NavbarBrand>
            <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterLink} to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterLink} to='/new' activeClassName='active'>
                        New Question
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={RouterLink} to='/leaderboard' activeClassName='active'>
                        Leaderboard
                    </NavLink>
                </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink tag={RouterLink} to='/login' activeClassName='active'>
                        Logout
                    </NavLink>
                </NavItem>
            </Nav>
        </Collapse>
        </Navbar>
    </div>
  )
}