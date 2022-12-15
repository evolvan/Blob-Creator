import styles from './canvas.module.css';
import { useSelector } from 'react-redux';

function Canvas() {

    const svgState = useSelector(state => state.svg);

    return (
        <div id={styles["preview"]}>
            <svg viewBox="0 0 200 200">
                <linearGradient id="linear-grad" gradientTransform={`rotate(${svgState.angle} 0.5 0.5)`}>
                    <stop offset="0%" stopColor={svgState.gradientColorOne} />
                    <stop offset="100%" stopColor={svgState.gradientColorTwo} />
                </linearGradient>
                <radialGradient id="radial-grad" r="100%" cx={`${svgState.cx + "%"}`} cy={`${svgState.cy + "%"}`}>
                    <stop offset="0%" stopColor={svgState.gradientColorOne} />
                    <stop offset="100%" stopColor={svgState.gradientColorTwo} />
                </radialGradient>
                {/* <pattern id="image" patternUnits="objectBoundingBox" width="1" height="1">
                        <image href="/src/assets/fill.jpg" x="0" y="0" style={{"width": "100%", "height": "auto"}} />
                    </pattern> */}
                <path fill={svgState.fill} stroke={svgState.stroke} strokeWidth={svgState.strokeWidth}
                    d={svgState.shape}
                    transform="translate(100 100)">
                    <animate attributeName="d" from={svgState.oldShape} to={svgState.shape} begin="0s" dur="1s" />
                </path>
            </svg>
        </div>
    );
};

export default Canvas;