import Card from "../Card/Card";
import styles from "./Cards.module.scss";

export default function Cards(props) {
  const { characters } = props; // Characters es un arreglo.
  return (
    <div className={styles.wrapperCards}>
      {characters.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })}
    </div>
  );
}
