import PropTypes from "prop-types";

import s from "./FriendListItem.module.css"

function FriendListItem(props) {
const {name,avatar, isOnline}= props

 return <li className={s.item}>
    <span className={`${s.status} ${s[isOnline]}`}></span>
    <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
    <p className={s.name}>{name}</p>
  </li>
}
FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
export default FriendListItem

