import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import Sidebar from './Sidebar'
import useUserContext from '../useUserContext'
import Post from './forms/Post'

export default function Body({ sidebar, children }) {

    const { user } = useUserContext()

    console.log(user, 'from body');

    return (
        <Container>
            <Stack direction='horizontal'>
               { sidebar && <Sidebar /> }
                <Container className='center-content'>
                    { user.username && <Post />}
                    { children }
                </Container>
            </Stack>
        </Container>
    )
}
