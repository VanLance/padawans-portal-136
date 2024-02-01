import { createContext, useState } from "react";

const UserContext = createContext()

export default function UserProvider({ children }) {

    const [user, setUser] = useState({ username: '', password: '', token: '', followed: '' })

    function updateUser({ username, password, token, followed }) {
        setUser({ username, password, token, followed })
    }

    const values = {
        user,
        updateUser,
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext
}