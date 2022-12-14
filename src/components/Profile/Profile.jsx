import PropTypes from "prop-types";

import s from "./Profile.module.css"

function Profile(props) {

    const {username, tag,location,avatar,stats} = props
    return <div className={s.profile}>
    <div className={s.description}>
      <img
        src={avatar}
        alt={username}
        className={s.avatar}
      />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  
    <ul className={s.stats}>
      <li>
        <span className={s.label}>Followers</span>
        <span className={s.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={s.label}>Views</span>
        <span className={s.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={s.label}>Likes</span>
        <span className={s.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
}

Profile.propTypes = {
  username: PropTypes.string,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}
export default Profile
