import styles from './canvas.module.css';
import { useSelector } from 'react-redux';


function Canvas() {

    const svgState = useSelector(state => state.svg);

    return (
        <main id={styles["main-layout"]} >
            <div id={styles["preview"]}>
                <svg viewBox="0 0 200 200">
                    <linearGradient id="grad" gradientTransform={`rotate(${svgState.angle} 0.5 0.5)`}>
                        <stop offset="0%" stopColor={svgState.gradientColorOne} />
                        <stop offset="100%" stopColor={svgState.gradientColorTwo} />
                    </linearGradient>
                    <path fill={svgState.fill} stroke={svgState.stroke} strokeWidth={svgState.strokeWidth}
                        d={svgState.shape}
                        transform="translate(100 100)" />
                </svg>
            </div>
        </main>
    );
};

export default Canvas;