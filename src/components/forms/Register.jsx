import { useState } from "react"

export default function Register() {

    const [user, setUser] = useState({ username: '', email: '', password: '' })
   
    const apiUrl = import.meta.env.VITE_API_URL
    
    async function registerUser(){
        const res = await fetch(apiUrl.concat('/register'),{
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
        }
    }

    function handleSubmit(e){
        e.preventDefault()
        registerUser()
        console.log(user, 'form submitted');
        setUser({username:'',email:'',password:''})
    }

    return (
        <>
            <h3>Register</h3>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label><br />
                <input type="text" name='username' value={user.username} onChange={(e) => setUser({ ...user, username: e.target.value })}  required/><br />
                <label htmlFor="email">Email</label><br />
                <input type="email" name='email' value={user.email} onChange={(e)=> setUser({...user, email: e.target.value})} required/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" name='password' value={user.password} onChange={(e)=> setUser({...user, password: e.target.value})} required/><br />
                <input type="submit" value={'Register'}/>
            </form>
        </>
    )

}
