import styles from './HeaderMenu.module.scss';
function HeaderMenu() {
  return (
  <ul className={`${styles.MenuContainer} card p-20`}>
    <li>wishlist</li>
    <li>connexion</li>

  </ul>
  )
}

export default HeaderMenu