import styles from './Banner.module.css';

function Banner({ imagem }) {
    return (
        <div className={styles.capa} style={{ backgroundImage: `url('/imgs/banner-${imagem}.png')` }}>

        </div>
    )
}

export default Banner;