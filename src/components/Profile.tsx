import styles from '../styles/components/Profile.module.css';

export function Profile(){
  return(
    <div className={styles.profileContainer}>
      <img src="https://github.com/Nathan-Andrade.png" alt="Nathan de Andrade"/>
      <div>
        <strong>Nathan de Andrade</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
          </p>
      </div>
    </div>
  )
}