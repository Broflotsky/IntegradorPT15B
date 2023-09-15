import styles from "./Card.module.css";

export default function Card(props) {
  const { name, status, species, gender, origin, image, onClose } = props;

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.wrapperButton}>
          <button className={styles.btn} onClick={onClose}>
            X
          </button>
        </div>
        <img src={image} alt="" />
      </div>

      <div className={styles.wrapperText}>
        <div className={name ? styles.name : styles.noname}>
          <h1>{name}</h1>
        </div>

        <h2>{species}</h2>
        <h2>{gender}</h2>
        {/* <h2>{origin}</h2> */}
      </div>
    </div>
  );
}
