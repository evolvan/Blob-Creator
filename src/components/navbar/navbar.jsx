import styles from './navbar.module.css';

function Navbar() {
    return (
        <header>
            <nav className={styles["nav-container"]}>
                <ul className={styles["navbar"]}>
                    <li className={styles["nav-item"]}>
                        <a href="https://evolvan.com/tools/"> Back to Evolvan Tools</a>
                    </li>
                </ul>
                <h1>Blob Generator Tool</h1>
            </nav>

            {/* <div id={styles["nav-img"]}></div> */}
        </header>
    )
}

export default Navbar