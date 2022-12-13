import styles from './canvas.module.css';
import { useSelector } from 'react-redux';


function Canvas() {

    const svg = useSelector(state => state.svg);

    return (
        <main id={styles["main-layout"]} >
            <div id={styles["preview"]}>
                <svg viewBox="0 0 200 200">
                    <linearGradient id="grad" x1="70.711%" x2="10%" y1="70.711%" y2="10%">
                        <stop offset="0%" stopColor={svg.gradietColorOne} stopOpacity="1" />
                        <stop offset="100%" stopColor={svg.gradietColorTwo} stopOpacity="1" />
                    </linearGradient>
                    <path fill={svg.fill} stroke={svg.stroke} strokeWidth={svg.strokeWidth}
                        d={svg.shape}
                        transform="translate(100 100)" />
                </svg>
            </div>
        </main>
    );
};

export default Canvas;