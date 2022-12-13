import styles from "./sidebar.module.css";
import { HexColorPicker } from "react-colorful";
import { TfiPaintBucket } from 'react-icons/tfi';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeFill, changeStroke, changeStrokeWidth, changeType } from "../../store/slices/svgSlice";


function Fill() {

    const [optionOne, setOptionOne] = useState(true);
    const svgState = useSelector(state => state.svg);
    const dispatch = useDispatch();


    const optionOneHandler = () => {
        setOptionOne(state => { return !state });
    };

    const typeHandler = (e) => {
        dispatch(changeType(e.target.innerHTML.toLowerCase()));
    }

    const fillHandler = (value) => {
        dispatch(changeFill(value));
    };

    const strokeHandler = (value) => {
        dispatch(changeFill("transparent"));
        dispatch(changeStroke(value))
    }

    const strokeWidthHandler = (e) => {
        dispatch(changeStrokeWidth(e.target.value));
    }

    return (
        <div className={styles["options"]}>
            <div className={styles["options-toggler"]}>
                <a onClick={optionOneHandler}><TfiPaintBucket /> BLOB FILL</a>
                {optionOne ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}

            </div>
            {optionOne && <div className={styles["options-body"]}>
                <div>
                    <p>Fill type:</p>
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary" onClick={typeHandler} >Solid</button>
                        <button type="button" className="btn btn-secondary" onClick={typeHandler}>Outline</button>
                    </div>
                </div>

                <div>
                    {svgState.type === "solid" ?
                        <><p>Color:</p><div className="btn-group">
                            <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: svgState.fill }}></div></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <div className={styles["color-picker"]}>
                                        <p>Pick a color</p>
                                        <HexColorPicker color={svgState.fill} onChange={fillHandler} />
                                    </div>
                                </li>
                            </ul>
                        </div></> : ""}


                    {svgState.type === 'outline' ?
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
                        </> : ""}
                </div>

            </div>}
        </div>
    );
};

export default Fill;