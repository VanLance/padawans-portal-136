
import Container from 'react-bootstrap/Container'

import { Posts } from "./components/Posts"
import Header from './components/Header'
import Post from './components/forms/Post'
import Whiteboard from './components/Whiteboard'
import Register from './components/forms/Register'
import Users from './components/Users'
import FormPage from './pages/FormPage'
import SocialPage from './pages/SocialPage'
import LandingPage from './pages/LandingPage'
import Login from './components/forms/Login'
import { Route, Routes } from 'react-router-dom'
import UserPage from './pages/UserPage'
import { ToastContainer } from 'react-toastify'
import Logout from './components/Logout'

export default function App() {

  return (
    <Container fluid data-bs-theme='dark' className='app'>
      <Header />
      <Post />
      <Routes>
        <Route path='/' element={<LandingPage>
          <Whiteboard />
        </LandingPage>} />
        <Route path='/login' element={<FormPage>
          <Login />
        </FormPage>} />
        <Route path='/register' element={<FormPage>
          <Register />
        </FormPage>} />
        <Route path='/users' element={<SocialPage>
          <Users />
        </SocialPage>} />
        <Route path='/posts' element={<SocialPage>
          <Posts />
        </SocialPage>} />
        <Route path='/user/:username' element={<UserPage />} />
        <Route path='logout' element={<Logout/>} />
      </Routes>
      <ToastContainer />
    </Container>
  )
}