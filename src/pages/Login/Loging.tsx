import styles from "./Login.module.css";
import Profesor from "../../assets/profesor.png";
import GoogleIcon from "../../assets/google.png";

function Loging() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bienvenido al sistema de toma de asistencia de estudiantes</h1>
            <p className={styles.description}>Por favor, inicie sesión para comenzar a tomar la asistencia de sus estudiantes.</p>
            <div className={styles.containerForm}>
                <form>
                    <div className={styles.element}>
                        <label htmlFor="email">Correo electrónico:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className={styles.element}>
                        <label htmlFor="password">Contraseña:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div className={styles.center}>
                        <button className={styles.btn} type="submit">Iniciar sesión</button>
                    </div>
                    <p className={styles.center}>Inicia sesión con:</p>
                    <div className={styles.center}>
                        <img className={styles.icon} src={GoogleIcon} alt="Google Icon" />
                    </div>
                    <div className={styles.center}>
                        <span className={styles.span}>No tengo cuenta. <a className={styles.a} href="#">Crear Cuenta</a></span>
                    </div>
                </form>
                <div>
                    <img src={Profesor} alt="Estudiante logeandose" />
                </div>

            </div>
        </div>
    )
}

export default Loging