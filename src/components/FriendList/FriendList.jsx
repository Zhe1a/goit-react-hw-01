import Friends from "../../data/friends.json"
import FriendListItem from "./FriendListItem/FriendListItem"
import s from "./FriendList.module.css"

function FriendList() {
    return <ul className={s['friend-list']}>
{Friends.map(({id,name,avatar,isOnline})=>
<FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />
    )}
    </ul>
}

export default FriendList