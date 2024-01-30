import Post from "./SinglePost"

export const Posts = () => {

    const posts = [
        {
            "body": "Editing from insomni 2",
            "id": "3",
            "timestamp": "2024-01-03T00:35:27.568774",
            "user": {
                "email": "dsmith232@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "dsmith232"
            }
        },
        {
            "body": "POST from insomnia 32",
            "id": "4",
            "timestamp": "2024-01-03T00:54:46.188100",
            "user": {
                "email": "dsmith232@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "dsmith232"
            }
        },
        {
            "body": "POST from insomnia 332",
            "id": "5",
            "timestamp": "2024-01-03T00:54:49.010977",
            "user": {
                "email": "dsmith232@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "dsmith232"
            }
        },
        {
            "body": "POST from insomnia 3332",
            "id": "6",
            "timestamp": "2024-01-03T00:54:50.843257",
            "user": {
                "email": "dsmith232@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "dsmith232"
            }
        },
        {
            "body": "logged in post",
            "id": "7",
            "timestamp": "2024-01-04T01:56:13.923976",
            "user": {
                "email": "dsmith232@gmail.com",
                "first_name": null,
                "id": "1",
                "last_name": null,
                "username": "dsmith232"
            }
        },
        {
            "body": "logged in post",
            "id": "8",
            "timestamp": "2024-01-04T02:00:12.567400",
            "user": {
                "email": "newdsmith12@ct.com",
                "first_name": null,
                "id": "3",
                "last_name": null,
                "username": "dsmith"
            }
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
