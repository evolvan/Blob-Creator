import styles from './canvas.module.css';
import { useSelector } from 'react-redux';


function Canvas({ color }) {

    const canvasState = useSelector(state => state.canvasState);
    
    return (
        <>
            <main id={styles["main-layout"]} >
                <div id={styles["preview"]}>
                    <svg viewBox="0 0 200 200" >
                        <path fill={canvasState.fill}
                            d={canvasState.shape}
                            transform="translate(100 100)" />
                    </svg>
                </div>
            </main>
        </>
    );
};

export default Canvas;