import styles from './canvas.module.css';
import { useSelector } from 'react-redux';

function Canvas() {
  const svgState = useSelector((state) => state.svg);

  return (
    <div id={styles['preview']}>
      <svg viewBox="0 0 200 200">
        {svgState.type === 'linear gradient' && (
          <linearGradient
            id="linear-grad"
            gradientTransform={`rotate(${svgState.angle} 0.5 0.5)`}
          >
            <stop offset="0%" stopColor={svgState.gradientColorOne} />
            <stop offset="100%" stopColor={svgState.gradientColorTwo} />
          </linearGradient>
        )}
        {svgState.type === 'radial gradient' && (
          <radialGradient
            id="radial-grad"
            r="100%"
            cx={`${svgState.cx + '%'}`}
            cy={`${svgState.cy + '%'}`}
          >
            <stop offset="0%" stopColor={svgState.gradientColorOne} />
            <stop offset="100%" stopColor={svgState.gradientColorTwo} />
          </radialGradient>
        )}
        <path
          fill={svgState.fill}
          stroke={svgState.stroke}
          strokeWidth={svgState.strokeWidth}
          d={svgState.shape}
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
}

export default Canvas;
