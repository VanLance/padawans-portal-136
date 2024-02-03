
import { useContext, useRef } from "react"
import { UserContext } from "../../contexts/UserContext"


export default function Post() {

    const { user } = useContext(UserContext)
    const postInputRef = useRef(null)

    const apiUrl = import.meta.env.VITE_API_URL

    async function sendPost(postData) {
        const res = await fetch(apiUrl.concat('/post/'), {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({ body: postData })
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
            return
        }
        console.error('Post failed')
    }

    function handleSubmit(e) {
        e.preventDefault()
        const postData = postInputRef.current.value
        sendPost(postData)
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '1rem'
        }}>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name='post' ref={postInputRef} placeholder="What is Happening"/>
                <input type="submit" value='post' />
            </form>
        </div>
    )
}
