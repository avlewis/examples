import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
    return(
        <div className={styles.navbar}>
            <Link className={styles.navbar_link} to="/">Home</Link>
        </div>
    )
}