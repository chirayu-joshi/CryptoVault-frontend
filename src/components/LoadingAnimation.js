import styles from './LoadingAnimation.module.css'

const loadingAnimation = (props) => (
  <div className={styles.animationContainer + ' ' + props.className}>
    <div className={styles.animation}>
      <div></div>
      <div></div>
    </div>
  </div>
)

export default loadingAnimation
