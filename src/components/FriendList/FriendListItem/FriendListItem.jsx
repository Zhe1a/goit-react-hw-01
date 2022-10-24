import s from "./FriendListItem.module.css"

function FriendListItem(proto) {
const {name,avatar,}= proto

 return <li className={s.item}>
    {/* {isOnline ? green : red} */}
    <span className={s.status}> </span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
  </li>
}

export default FriendListItem

