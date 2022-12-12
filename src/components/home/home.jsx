import { useState } from 'react';
import Canvas from '../canvas/canvas';
import Navigation from '../navigation/navigation'
import Sidebar from '../sidebar/sidebar';
import styles from './home.module.css'

function Home() {

    const [color, setColor] = useState('#6900ff')

    const setColorHandler = (color) => {
        setColor(color)
    }

    return (
        <>
            <Navigation />
            <div className={styles["main-layout"]}>
                <div className={styles["sidebar"]}><Sidebar color={color} setColor={setColorHandler} /></div>
                <div className={styles["canvas"]}><Canvas color={color} /></div>
            </div>
        </>
    )
}

export default Home