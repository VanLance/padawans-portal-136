import Body from "../components/Body"
import useUserContext from "../useUserContext"
import SingleUser from "../components/SingleUser"

export default function UserFriendsPage() {

    const { user } = useUserContext()
    const followedList = Object.values(user.followed)

    console.log(user, followedList);
    return (
        <Body sidebar>
            <ul>
                {followedList.map((friend, i) => {
                    return (
                        <li key={i} style={{ listStyleType: 'none' }}>
                            <SingleUser user={friend} />
                        </li>
                    )
                })
                }
            </ul>
        </Body>
    )
}
