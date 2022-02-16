import { Link } from 'react-router-dom';
import { examplesRoutes } from '../../router';
import styles from './Home.module.css';

export default function Home(){
    return(
        <div className={styles.body}>
            <div className={styles.container}>
                <div className={styles.hero}>
                    <h3>App Examples</h3>
                    {examplesRoutes.map((e) => 
                        <Link to={e.path}>{e.name}</Link>
                    )}

                </div>
            </div>

        </div>
    )
}