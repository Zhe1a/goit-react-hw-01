import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics(props) {
  const { title, stats } = props;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s['stat-list']}>
        {stats.map(({ label, id, percentage }) => (
          <li key={id} className={s.item}>
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
  title: PropTypes.string,
};

export default Statistics;
