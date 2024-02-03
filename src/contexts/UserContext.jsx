import { createContext, useEffect, useState } from "react";


const UserContext = createContext()

export default function UserProvider({ children }) {

    const [user, setUser] = useState({ username: '', token: '', followed: '' })

    useEffect(() => {
        if (user.username) {
            updateUserLocalStorage()
            return
        }
    }, [])

    function updateUser({ username, token, followed }) {
        setUser({ username, token, followed })
    }

    function logoutUser() {
        setUser({})
        clearUserFromLocalStorage()
    }

    function updateUserLocalStorage() {
        localStorage.setItem('user', JSON.stringify(user))
    }

    function clearUserFromLocalStorage() {
        localStorage.removeItem('user')
    }

    function updateUserFromLocalStorage() {
        if (localStorage.getItem('user')) {
            const { username, token, followed } = JSON.parse(localStorage.getItem('user'))
            updateUser({ username, token, followed })
        }
    }

    const values = {
        user,
        updateUser,
        logoutUser,
        updateUserLocalStorage,
        clearUserFromLocalStorage,
        updateUserFromLocalStorage
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