import { useDispatch, useSelector } from 'react-redux';
import { changeAngle, changeGradientColorOne, changeGradientColorTwo } from '../../../store/slices/svgSlice';
import { HexColorPicker } from "react-colorful";
import styles from '../sidebar.module.css';

function LinearGradient() {

    const svgState = useSelector(state => state.svg);
    const dispatch = useDispatch();

    const gradHandlerOne = (value) => {
        dispatch(changeGradientColorOne(value));
    };

    const gradHandlerTwo = (value) => {
        dispatch(changeGradientColorTwo(value));
    };

    const anglehandler = (e) => {
        dispatch(changeAngle(e.target.value));
    };

    return (
        <>
            <p>Color:</p>
            <div className="btn-group">
                <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: svgState.gradientColorOne }}></div></a>
                <ul className="dropdown-menu">
                    <li>
                        <div className={styles["color-picker"]}>
                            <p>Pick a color</p>
                            <HexColorPicker color={svgState.gradientColorOne} onChange={gradHandlerOne} />
                        </div>
                    </li>
                </ul>
                <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: svgState.gradientColorTwo }}></div></a>
                <ul className="dropdown-menu">
                    <li>
                        <div className={styles["color-picker"]}>
                            <p>Pick a color</p>
                            <HexColorPicker color={svgState.gradientColorTwo} onChange={gradHandlerTwo} />
                        </div>
                    </li>
                </ul>
            </div>
            <p>Angle:</p>
            <input type="range" className="form-range" min={1} max={360} defaultValue={svgState.angle} onChange={anglehandler} />
        </>
    );
};

export default LinearGradient;