import { createSlice } from "@reduxjs/toolkit";
import { lineRadial, curveBasisClosed } from "d3-shape";
import { range } from "d3-array";
import { scaleLinear } from "d3-scale";


function roundPath(path, precision = 0.1) {
    if (!path) return;
    const query = /[\d.-][\d.e-]*/g;
    return path.replace(query, n => Math.round(n * (1 / precision)) / (1 / precision));
}

const generateBlobShape = (data) => {
    const shapeGenerator = lineRadial()
        .angle((d, i) => (i / data.length) * 2 * Math.PI)
        .curve(curveBasisClosed)
        .radius(d => d);
    return shapeGenerator(data.map(d => Math.abs(d)));
}

const generateData = (complexity, contrast) => {
    const scale = scaleLinear()
        .domain([0, 1])
        .range([100 - (100 / 8 * contrast - 0.01), 100]);
    return range(complexity).map(() => scale(Math.random()));
}

const initialData = generateData(5, 4);

export const canvasSlice = createSlice({
    name: "canvas",
    initialState: {
        fill: "#1f4e43",
        contrast: 4,
        complexity: 5,
        data: initialData,
        shape: roundPath(generateBlobShape(initialData) + "Z"),
    },
    reducers: {
        changeFill: (state, action) => {
            return { ...state, fill: action.payload };
        },

        changeContrast: (state, action) => {
            const data = generateData(state.complexity, action.payload);
            const shape = roundPath(generateBlobShape(data) + "Z");
            return { ...state, data, shape, contrast: action.payload };
        },

        changeComplexity: (state, action) => {
            const data = generateData(action.payload, state.contrast);
            const shape = roundPath(generateBlobShape(data) + "Z");
            return { ...state, data, shape, complexity: action.payload };
        },

        changeData: (state) => {
            const data = generateData(state.complexity, state.contrast);
            const shape = roundPath(generateBlobShape(data) + "Z");
            return  {...state, data, shape};
        },
    }
});

export const { changeFill, changeContrast, changeComplexity, changeData } = canvasSlice.actions;

export default canvasSlice.reducer;