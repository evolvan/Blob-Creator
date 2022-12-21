import { createSlice } from '@reduxjs/toolkit';
import { lineRadial, curveBasisClosed } from 'd3-shape';
import { range } from 'd3-array';
import { scaleLinear } from 'd3-scale';

const roundPath = (path, precision = 0.1) => {
  if (!path) return;
  const query = /[\d.-][\d.e-]*/g;
  // eslint-disable-next-line consistent-return
  return path.replace(query, (n) => Math.round(n * (1 / precision)) / (1 / precision));
};

const generateBlobShape = (data) => {
  const shapeGenerator = lineRadial()
    .angle((d, i) => (i / data.length) * 2 * Math.PI)
    .curve(curveBasisClosed)
    .radius((d) => d);
  return shapeGenerator(data.map((d) => Math.abs(d)));
};

const generateData = (complexity, contrast) => {
  const scale = scaleLinear()
    .domain([0, 1])
    .range([100 - ((100 / 8) * contrast - 0.01), 100]);
  return range(complexity).map(() => scale(Math.random()));
};

const initialData = generateData(5, 4);

export const svgSlice = createSlice({
  name: 'canvas',
  initialState: {
    type: 'solid',
    fill: '#1f4e43',
    gradientColorOne: '#1f4e43',
    gradientColorTwo: '#000000',
    angle: 0,
    cx: 50,
    cy: 50,
    stroke: 'transparent',
    strokeWidth: 1,
    contrast: 4,
    complexity: 5,
    data: initialData,
    oldShape: roundPath(`${generateBlobShape(initialData)}Z`),
    shape: roundPath(`${generateBlobShape(initialData)}Z`),
  },
  reducers: {
    changeType: (state, action) => {
      if (action.payload === 'solid' && state.type !== 'solid') {
        return {
          ...state, type: action.payload, fill: '#1f4e43', stroke: 'transparent', strokeWidth: 0,
        };
      }
      if (action.payload === 'outline' && state.type !== 'outline') {
        return {
          ...state, type: action.payload, stroke: '#1f4e43', strokeWidth: 0.1, fill: 'transparent',
        };
      }
      if (action.payload === 'linear gradient' && state.type !== 'linear gradient') {
        return {
          ...state, type: action.payload, fill: 'url(#linear-grad)', stroke: 'transparent', strokeWidth: 0,
        };
      }
      if (action.payload === 'radial gradient' && state.type !== 'radial gradient') {
        return {
          ...state, type: action.payload, fill: 'url(#radial-grad)', stroke: 'transparent', strokeWidth: 0,
        };
      }
      return { ...state };
    },
    changeContrast: (state, action) => {
      const data = generateData(state.complexity, action.payload);
      const shape = roundPath(`${generateBlobShape(data)}Z`);
      return {
        ...state, data, shape, contrast: action.payload,
      };
    },
    changeComplexity: (state, action) => {
      const data = generateData(action.payload, state.contrast);
      const shape = roundPath(`${generateBlobShape(data)}Z`);
      return {
        ...state, data, shape, complexity: action.payload,
      };
    },
    changeData: (state) => {
      const data = generateData(state.complexity, state.contrast);
      const shape = roundPath(`${generateBlobShape(data)}Z`);
      return {
        ...state, data, oldShape: state.shape, shape,
      };
    },
    changeFill: (state, action) => ({ ...state, fill: action.payload }),
    changeStroke: (state, action) => ({ ...state, stroke: action.payload }),
    changeStrokeWidth: (state, action) => {
      const strokeWidth = action.payload * 0.1;
      return { ...state, strokeWidth };
    },
    changeGradientColorOne: (state, action) => ({ ...state, gradientColorOne: action.payload }),
    changeGradientColorTwo: (state, action) => ({ ...state, gradientColorTwo: action.payload }),
    changeAngle: (state, action) => ({ ...state, angle: action.payload }),
    changeCX: (state, action) => ({ ...state, cx: action.payload }),
    changeCY: (state, action) => ({ ...state, cy: action.payload }),
  },
});

export const {
  changeFill,
  changeContrast,
  changeComplexity,
  changeData,
  changeType,
  changeStroke,
  changeStrokeWidth,
  changeGradientColorOne,
  changeGradientColorTwo,
  changeAngle,
  changeCX,
  changeCY,
} = svgSlice.actions;

export const svgReducer = svgSlice.reducer;
