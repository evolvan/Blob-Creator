import { HexColorPicker } from "react-colorful";
import styles from './canvas.module.css'
import { TbVectorTriangle, TbOctagon, TbCircle } from 'react-icons/tb';
import { GiWaterSplash } from 'react-icons/gi';
import { lineRadial, curveBasisClosed } from "d3-shape"
import { range } from "d3-array"
import { scaleLinear } from "d3-scale"
import { useState } from "react"
import fileDownload from "js-file-download";
import PreviewBox from "./previewBox";

function roundPath(path, precision = 0.1) {
    if (!path) return
    const query = /[\d.-][\d.e-]*/g
    return path.replace(query, n => Math.round(n * (1 / precision)) / (1 / precision))
}

const generateBlobShape = (data) => {
    const shapeGenerator = lineRadial()
        .angle((d, i) => (i / data.length) * 2 * Math.PI)
        .curve(curveBasisClosed)
        .radius(d => d)
    return shapeGenerator(data.map(d => Math.abs(d)))
}

const generateData = (complexity, contrast) => {
    const scale = scaleLinear()
        .domain([0, 1])
        .range([100 - (100 / 8 * contrast - 0.01), 100])
    return range(complexity).map(() => scale(Math.random()))
}

const initialData = generateData(5, 4)

const initialState = {
    contrast: 4,
    complexity: 5,
    data: initialData,
    shape: roundPath(generateBlobShape(initialData) + "Z"),
}

function Canvas({color}) {

    const [svgState, setSvgState] = useState(initialState)

    const updateContrast = contrast => {
        const data = generateData(svgState.complexity, contrast)
        const shape = roundPath(generateBlobShape(data) + "Z")
        setSvgState(state => {
            return { ...state, shape, data, contrast }
        })
    }

    const updateComplexity = complexity => {
        const data = generateData(complexity, svgState.contrast)
        const shape = roundPath(generateBlobShape(data) + "Z")
        setSvgState(state => {
            return { ...state, shape, data, complexity }
        })
    }

    const updateData = () => {
        const data = generateData(svgState.complexity, svgState.contrast)
        const shape = roundPath(generateBlobShape(data) + "Z")
        setSvgState(state => {
            return { ...state, shape, data }
        })
    }

    const contrastHandler = e => {
        updateContrast(e.target.value)
    }

    const complexityHandler = e => {
        updateComplexity(e.target.value)
    }

    const dataHandler = e => {
        updateData(e.target.value)
    }

    const SVG = `<svg viewBox="0 0 200 200" ><path fill="${color}" d="${svgState.shape}" transform="translate(100 100)" /></svg>`

    const downloadHandler = () => {
        fileDownload(SVG, 'blob.svg')
    }

    return (
        <>
            <main id={styles["main-layout"]} >
                <PreviewBox color={color} shape={svgState.shape} />
            </main>
        </>
    )
}

export default Canvas