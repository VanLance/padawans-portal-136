import { useContext, useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'
import { UserContext } from "../contexts/UserContext";

export default function Users() {

    const { user: loggedUser } = useContext(UserContext)

    const [users, setUser] = useState([])

    const apiUrl = import.meta.env.VITE_API_URL

    useEffect(() => {
        (async () => {
            const res = await fetch(apiUrl.concat('/user'))
            if (res.ok) {
                const data = await res.json()
                setUser(data)
            } else console.log('error');
        })()
    }, [])

    if (users.length === 0) {
        return <Spinner />
    }

    async function followUser(followerId) {
        const res = await fetch(`http://127.0.0.1:5000/user/follow/${followerId}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer '.concat(loggedUser.token)
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
    }

    function unfollowUser() { }

    function FollowButton({userId}) {
        return (loggedUser.followed?.[userId] ?
            <button onClick={() => unfollowUser(userId)}>Unfollow</button> :
            <button onClick={() => followUser(userId)}>Follow</button>
    )}


    return (
        <div>
            {users.map(user => {
                if (user.username !== loggedUser.username) {
                    return <div key={user.id}>
                        <p>{user.username}</p>
                        {loggedUser.username && <FollowButton userId={user.id}/>}
                    </div>
                }
            })}
        </div>
    )
}
