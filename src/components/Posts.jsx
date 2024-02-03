import { useState } from "react"
import Post from "./SinglePost"

const Posts = ({ posts: userPosts }) => {

    const [ posts, setPosts ] = useState(userPosts)

    const apiUrl = import.meta.env.VITE_API_URL

    console.log(posts, userPosts , '/////// posts');
    useState( () => {
        if(posts) {
            return
        }
        (async ()=>{
            const res = await fetch(apiUrl.concat('/post/'))
            if(res.ok){
                const data = await res.json()
                setPosts(data);
                return
            }
            console.error('failed to get posts')
        })()
    }, [])
  
    return (
        <div>
            {posts ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Posts to Display</p>}
        </div>
    )
}

export default Posts