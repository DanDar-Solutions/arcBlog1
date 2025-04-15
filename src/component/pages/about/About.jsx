import styles from './About.module.css'

function About(){

    return(
    <>
      <div className={styles['About-Container1']}>
        <h1 className={styles['About-h1']}>About "h1"</h1>
        <div className={styles['About-Container2']}>
          <h2 className={styles['About-h2']}>123</h2>
          <div className={styles['About-Container3']}>
            <h3 className={styles['About-h3']}>1234</h3>
          </div>
          <div className={styles['About-Container3']}>
            <h3 className={styles['About-h3']}>1234</h3>
          </div>
        </div>


        <div className={styles['About-Container2']}>
          <h2 className={styles['About-h2']}>123</h2>
          <div className={styles['About-Container3']}>
            <h3 className={styles['About-h3']}>1234</h3>
          </div>

          <div className={styles['About-Container3']}>
            <h3 className={styles['About-h3']}>1234</h3>
          </div>
        </div>
      </div>
    </>
    );
}

export default About 