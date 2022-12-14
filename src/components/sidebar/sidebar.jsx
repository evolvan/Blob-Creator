import styles from './sidebar.module.css';
import { TbDownload, TbArrowsRandom } from 'react-icons/tb'
import Fill from "./fill/fill";
import Shape from './shape';
import { useDispatch, useSelector } from 'react-redux';
import { changeData } from '../../store/slices/svgSlice';
import fileDownload from 'js-file-download';


function Sidebar() {


    const dispatch = useDispatch();
    const svgState = useSelector(state => state.svg)

    const dataHandler = () => {
        dispatch(changeData());
    };

    const SVG_TEMPLATE = `<svg viewBox="0 0 200 200"><linearGradient id="grad" gradientTransform="rotate(${svgState.angle} 0.5 0.5)"><stop offset="0%" stop-color="${svgState.gradientColorOne}" /><stop offset="100%" stop-color="${svgState.gradientColorTwo}" /></linearGradient><path fill="${svgState.fill}" stroke="${svgState.stroke}" stroke-width="${svgState.strokeWidth}" d="${svgState.shape}" transform="translate(100 100)" /></svg>`;

    const downloadHandler = () => {
        fileDownload(SVG_TEMPLATE, "blob.svg");
    };

    return (
        <div className={styles["bar"]}>
            <div>
                <Fill />
                <Shape />
            </div>
            <div className={styles["btn-container"]}>
                <button type="button" className="btn btn-outline-success" onClick={dataHandler}><TbArrowsRandom /> Generate</button>
                <button type="button" className="btn btn-success" onClick={downloadHandler}><TbDownload /> Download</button>
            </div>
        </div>
    );
};

export default Sidebar;