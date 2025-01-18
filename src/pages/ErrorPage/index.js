import styles from './ErrorPage.module.css';

function ErrorPage() {
    return (
        <section className={styles.container}>
            <h2>Ops!</h2>
            <p>Página não encontrada!</p>
        </section>
    )
}

export default ErrorPage;