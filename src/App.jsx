import Container from 'react-bootstrap/Container'

import { Posts } from "./components/Posts"
import Header from './components/Header'

export default function App() {



  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />

      <Posts></Posts>
    </Container>
  )
}