 import styles from "./Recipe.module.scss"
 import couscous from "../assets/images/couscous-viande.jpg"
function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={couscous} alt="recipe" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-row align-items-center justify-content-center`}>
        <h3>
        Couscous Viande
        </h3>
      </div>
    </div>
  )
}

export default Recipe