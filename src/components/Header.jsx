import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { NavDropdown } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { RiAliensLine } from 'react-icons/ri'
import { GiLightSabers } from "react-icons/gi";

import { UserContext } from '../contexts/UserContext'

export default function Header() {

    const { user } = useContext(UserContext)

    return (
        <Navbar className="bg-body-tertiary mb-4" sticky='top'>
            <Container>
                <Navbar.Brand as={NavLink} to="/">
                    <GiLightSabers />
                    Padawans Portal
                </Navbar.Brand>
                {user.username ?
                    <Nav.Link as={NavLink} to='/logout'>Logout</Nav.Link> :
                    <NavDropdown title={<RiAliensLine />} id="basic-nav-dropdown">
                    <NavDropdown.Item as={NavLink} to='/login'>Login</NavDropdown.Item>
                    <NavDropdown.Item as={NavLink} to='/register'>Register</NavDropdown.Item>
                  </NavDropdown>
                }
            </Container>

        </Navbar>
    )
}
