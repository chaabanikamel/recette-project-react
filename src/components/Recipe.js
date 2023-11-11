 import styles from "./Recipe.module.scss"
 import { useState } from "react";
 
function Recipe({title,image}) {
 const [liked,setLiked]=useState(false);
 function handleClick(){
       setLiked(!liked)
 }
  return (
    <div  onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="recipe" />
      </div>
      <div className={`${styles.recipeTitle} d-flex flex-column align-items-center justify-content-center`}>
        <h3 className="mb-10">
          {title}
      
          <i className={`fa-solid fa-heart ${liked ? "text-primary":" "}`}></i>
          </h3>
      
      </div>
    </div>
  )
}

export default Recipe