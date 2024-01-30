
import { useRef } from "react"


export default function Post({ user }) {

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
