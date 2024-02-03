import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../contexts/UserContext'


export default function Sidebar() {

  const { user } = useContext(UserContext)

  return (
    <Navbar sticky='top' className='flex-column sidebar'>
      <Nav.Item>
        <Nav.Link as={NavLink} to='/users'>Users</Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to='/posts'>Feed</Nav.Link>
      </Nav.Item>
      {user.username &&
        <>
          <Nav.Item>
            <Nav.Link as={NavLink} to={'/user/'.concat(user.username)}>My Page</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={NavLink} to={'/user/friends'}>Friends</Nav.Link>
          </Nav.Item>
        </>
      }
      <Nav.Item>
        <Nav.Link as={NavLink} to='/'>Padawans Playground</Nav.Link>
      </Nav.Item>
    </Navbar>
  )
}
