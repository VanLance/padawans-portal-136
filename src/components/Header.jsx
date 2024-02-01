import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export default function Header() {

    const { user } = useContext(UserContext)

    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Padawans Portal</Navbar.Brand>
                {user.username ?
                    <Link to='/logout'>Logout</Link> :
                    <>
                        <Link to='/login'>Login</Link>
                        <Nav.Link href='/register'>Register</Nav.Link>
                    </>
                }

                <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
                <Nav.Link as={NavLink} to='/posts'>Posts</Nav.Link>
            </Container>


            {/* <Nav.Link href="#link">Link</Nav.Link> */}
        </Navbar>
    )
}
