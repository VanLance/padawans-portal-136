import { useContext, useEffect, useState } from "react"
import Spinner from 'react-bootstrap/Spinner'

import { UserContext } from "../contexts/UserContext";
import SingleUser from "./SingleUser";

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



    return (
        <div>
            {users.map(user => {
                if (user.username !== loggedUser.username) {
                    return <div key={user.id}>
                        
                        <SingleUser user={user} />
                        
                    </div>
                }
            })}
        </div>
    )
}
