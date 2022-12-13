import styles from "./sidebar.module.css";
import { HexColorPicker } from "react-colorful";
import { TfiPaintBucket } from 'react-icons/tfi';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeFill } from "../../store/slices/canvasSlice";


function Fill() {

    const [optionOne, setOptionOne] = useState(true);
    const canvasState = useSelector(state => state.canvasState);
    const dispatch = useDispatch();


    const optionOneHandler = () => {
        setOptionOne(state => { return !state });
    };

    const fillHandler = (value) => {
        dispatch(changeFill(value));
    };

    return (
        <div className={styles["options"]}>
            <div className={styles["options-toggler"]}>
                <a onClick={optionOneHandler}><TfiPaintBucket /> BLOB FILL</a>
                {optionOne ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}

            </div>
            {optionOne && <div className={styles["options-body"]}>
                <div>
                    <p>Fill type:</p>
                    <div className="btn-group">
                        <button type="button" className={[styles["btn-custom"]]} data-bs-toggle="dropdown" aria-expanded="false">
                            <b>Solid <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></b>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Solid</a></li>
                            <li><a className="dropdown-item" href="#">Outline</a></li>
                            <li><a className="dropdown-item" href="#">Linear Gradient</a></li>
                        </ul>
                    </div>
                </div>

                <div>
                    <p>Color:</p>
                    <div className="btn-group">
                        <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: canvasState.fill }}></div></a>
                        <ul className="dropdown-menu">
                            <li>
                                <div className={styles["color-picker"]}>
                                    <p>Pick a color</p>
                                    <HexColorPicker color={canvasState.fill} onChange={fillHandler} />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Fill;