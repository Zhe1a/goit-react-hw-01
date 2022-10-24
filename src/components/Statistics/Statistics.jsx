
import s from "./Statistics.module.css"

function Statistics(proto) {
const {title,stats}=proto
    return <section className={s.statistics}>
    <h2 className={s.title}>{title}</h2>
    <ul className={s["stat-list"]}>
{stats.map(elm=> 
   <li key={elm.id} className={s.item}>
        <span className={s.label}>{elm.label}</span>
        <span className={s.percentage}>{elm.percentage}%</span>
      </li>
)}
    </ul>
  </section>
}


export default Statistics