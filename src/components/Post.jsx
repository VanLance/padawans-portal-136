
export default function Post({ post }) {
    
    return (
        <p>
            <b>{post.user.username} </b><br />
            {post.body}
        </p>
    )
}
