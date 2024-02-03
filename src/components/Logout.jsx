import { useContext, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import { UserContext } from "../contexts/UserContext"
import { useNavigate } from "react-router-dom"

export default function Logout() {

    const { logoutUser } = useContext(UserContext)
    const navigate = useNavigate()

    useEffect(() => {
        logoutUser()
        navigate('/login')
    }, [])

    return <Spinner />
}
