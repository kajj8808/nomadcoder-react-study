import { Link } from "react-router-dom";
import styles from "./Card.module.css";
function Card({ id, thumbnail, description, name }) {
  return (
    <li key={id} className={styles.card}>
      <Link to={`/character/${id}`}>
        <div className={styles.card_thumbnail}>
          <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="" />
        </div>
        <p>{name}</p>
      </Link>
    </li>
  );
}

export default Card;
