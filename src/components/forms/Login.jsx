import { useState, useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { UserContext } from "../../contexts/UserContext"

export default function Login() {

    const [isLogging, setIsLogging] = useState(false)
    const [user, setUser] = useState({ username: '', password: '', token: '' })

    const apiUrl = import.meta.env.VITE_API_URL

    const { updateUser, user: userState, updateUserLocalStorage } = useContext(UserContext)
    const navigate = useNavigate()

    if (isLogging) {
        loginUser()
    }

    useEffect(() => {
        if (userState.username) {
            updateUserLocalStorage()
            navigate('/')
            return
        }
    }, [updateUser])

    async function getUser(username) {
        const res = await fetch(`${apiUrl}/user/${username}`)
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            return data
        }
    }

    async function loginUser() {
        setIsLogging(false)

        const res = await fetch('https://padawans-portal-api.onrender.com/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })

        if (res.ok) {
            const data = await res.json()

            if (data.token) {
                toast.success(user.username.concat(' logged in!'))
                const userData = await getUser(user.username)
                console.log(userData, 'after login ');
                updateUser({ token: data.token, username: user.username, followed: userData?.followed })
                return
            }
        }
        toast.error('Invalid User Info/ Try Again')
        console.error("Login failed")
    }

    function handleSubmit(e) {
        e.preventDefault()
        const loginElement = e.currentTarget
        const loginForm = new FormData(loginElement)
        console.log(loginForm.get('username'));
        console.log(loginForm.get('password'));
        setUser(
            Object.fromEntries(loginForm)
        )
        setIsLogging(true)
    }

    return (
        <>
            <h3>Login</h3>
            <form action="" id='login-form' onSubmit={handleSubmit}>
                <label htmlFor="username"></label><br />
                <input type="text" name='username' /><br />
                <label htmlFor="password"></label><br />
                <input type="password" name={'password'} /><br />
                <input type="submit" value={'Login'} />
            </form>
        </>
    )
}
