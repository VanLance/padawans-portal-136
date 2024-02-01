import { useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'

export default function Users({ user: loggedUser }) {

    console.log(loggedUser, 'from users page');
    const [users, setUser] = useState([])

    useEffect(() => {
        (async () => {
            const res = await fetch('http://127.0.0.1:5000/user')
            if (res.ok) {
                const data = await res.json()
                console.log(data, 'usresr');
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

    function unfollowUser(){}

    return (
        <div>
            {users.map(user => {
                if (user.username !== loggedUser.username) {
                    return <div key={user.id}>
                        <p>{user.username}</p>
                        { loggedUser.followed.hasOwnProperty(user.id) ? 
                        <button onClick={() => unfollowUser(user.id)}>Unfollow</button> :
                        <button onClick={() => { followUser(user.id) }}>Follow</button>
                     }
                    </div>
                }
            })}
        </div>
    )
}
