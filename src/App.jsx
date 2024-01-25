import Container from 'react-bootstrap/Container'

import { Posts } from "./components/Posts"
import Header from './components/Header'
import Body from './components/Body'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'
import Users from './components/Users'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Body>
        {/* <Posts /> */}
        {/* <Whiteboard /> */}
        <Users />
        {/* <Register /> */}
      </Body>
    </Container>
  )
}