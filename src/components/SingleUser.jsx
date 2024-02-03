import useUserContext from "../useUserContext";

export default function SingleUser({ user }) {

    const { user: loggedUser } = useUserContext()

    async function followUser(followerId) {
        const res = await fetch(`http://127.0.0.1:5000/user/follow/${followerId}`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
                Authorization: 'Bearer '.concat(loggedUser.token)
            }
        })
        if (res.ok) {
            const data = await res.json()
            console.log(data);
        }
    }

    function unfollowUser() { }

    function FollowButton({ userId }) {
        return (loggedUser.followed?.[userId] ?
            <button onClick={() => unfollowUser(userId)}>Unfollow</button> :
            <button onClick={() => followUser(userId)}>Follow</button>
        )
    }

    return (
        <>
            <h3>{user.username}</h3>
            <br />
            {loggedUser.username && <FollowButton userId={user.id} />}
        </>
    )
}
