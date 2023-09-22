import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  // eslint-disable-next-line no-unused-vars
  const { id, name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.wrapperButton}>
          <button className={styles.btn} onClick={() => onClose(id)}>
            X
          </button>
        </div>
        <img src={image} alt="" />
      </div>

      <div className={styles.wrapperText}>
        <div className={name ? styles.name : styles.noname}>
          <Link
            to={`/detail/${id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <h1>{name}</h1>
          </Link>
        </div>

        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>{origin}</h2> */}
      </div>
    </div>
  );
}
