
import { useContext, useRef } from "react"
import { UserContext } from "../../contexts/UserContext"


export default function Post() {

    const { user } = useContext(UserContext)
    const postInputRef = useRef(null)

    async function sendPost( postData ){
        const res = await fetch('http://127.0.0.1:5000/post/',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${user.token}`
            },
            body: JSON.stringify({body: postData})
        })
        if(res.ok){
            const data = await res.json()
            console.log(data);
            return
        }
        console.error('Post failed')
    }

    function handleSubmit(e){
        e.preventDefault()
        const postData = postInputRef.current.value
        sendPost(postData)
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="post">Post</label>
            <input type="text" name='post' ref={postInputRef} />
            <input type="submit" value='post'/>
        </form>
    )
}
