import Post from "./Post"

export const Posts = () => {

    const posts = [
        {
            "body": "Editing from insomnia 2",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user_id": "1"
        },
        {
            "body": "POST from insomnia 32",
            "id": "4",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user_id": "1"
        },
        {
            "body": "POST from insomnia 332",
            "id": "5",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user_id": "1"
        },
        {
            "body": "POST from insomnia 3332",
            "id": "6",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user_id": "1"
        }
    ]

    return (
        <>
            {posts.length > 0 ? posts.map((post) => {
                return <Post key={post.id} post={post} />
            }) : <p>No Posts to Display</p>}
        </>
    )
}
