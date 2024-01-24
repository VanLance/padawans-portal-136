import { useState } from "react"

export default function Register() {

    const [user, setUser] = useState({ username: '', email: '', password: '' })
    
    function handleSubmit(e){
        e.preventDefault()
        console.log(user, 'form submitted');
        setUser({username:'',email:'',password:''})
    }

    return (
        <>
            <h3>Register</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })} /><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name='email' value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/><br />
                <input type="Submit" />
            </form>
        </>
    )

}
