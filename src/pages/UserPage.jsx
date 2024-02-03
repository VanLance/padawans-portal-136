import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner'

import Body from '../components/Body'
import Posts from '../components/Posts'

export default function UserPage() {

    const [user, setUser] = useState(null)

    const { username } = useParams()

    const apiUrl = import.meta.env.VITE_API_URL
    
    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/user/${username}`)
            if (res.ok) {
                const data = await res.json()
                console.log(data);
                const { username, posts } = data
                setUser({ username, posts })
            }
        })()
    }, [])

    if (!user) return <Spinner />

    return (
        <Body sidebar>
            <h2>{user.username}</h2>
            <Posts posts={user.posts} />
            {/* {user.posts.map((post) => {
                return <p key={post.id}>{post.body} <small>{post.timestamp}</small> </p>
            })} */}
        </Body>
    )
}
