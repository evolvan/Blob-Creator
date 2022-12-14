import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from "react-colorful";
import { changeFill, changeStroke, changeStrokeWidth } from '../../../store/slices/svgSlice';
import styles from '../sidebar.module.css';

function Outline() {

    const svgState = useSelector(state => state.svg);
    const dispatch = useDispatch();

    const strokeHandler = (value) => {
        dispatch(changeFill("transparent"));
        dispatch(changeStroke(value));
    }

    const strokeWidthHandler = (e) => {
        dispatch(changeStrokeWidth(e.target.value));
    };

    return (
        <>
            <p>Color:</p>
            <div className="btn-group">
                <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: svgState.stroke }}></div></a>
                <ul className="dropdown-menu">
                    <li>
                        <div className={styles["color-picker"]}>
                            <p>Pick a color</p>
                            <HexColorPicker color={svgState.stroke} onChange={strokeHandler} />
                        </div>
                    </li>
                </ul>
            </div>
            <p>Border Width:</p>
            <input type="range" className="form-range" min={1} max={40} defaultValue={1} onChange={strokeWidthHandler} />
        </>
    );
};

export default Outline;