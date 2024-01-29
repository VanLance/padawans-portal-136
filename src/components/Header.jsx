import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Padawans Portal</Navbar.Brand>
                <Nav.Link href='/register'>Register</Nav.Link>
                <Link to='/login'>Login</Link>
                <Nav.Link href='/users'>Users</Nav.Link>
                <Nav.Link href='/posts'>Posts</Nav.Link>
            </Container>


            {/* <Nav.Link href="#link">Link</Nav.Link> */}
        </Navbar>
    )
}
