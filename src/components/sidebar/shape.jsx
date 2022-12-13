import styles from './sidebar.module.css';
import { useState } from "react";
import { TbOctagon, TbCircle, TbTriangle } from 'react-icons/tb';
import { GiWaterSplash } from 'react-icons/gi';
import { BiCustomize } from 'react-icons/bi';
import { changeComplexity, changeContrast } from "../../store/slices/svgSlice";
import { useDispatch } from "react-redux";

function Shape() {

    const [optionTwo, setOptionTwo] = useState(false);
    const dispatch = useDispatch();

    const optionTwoHandler = () => {
        setOptionTwo(state => { return !state });
    };

    const contrastHandler = (e) => {
        dispatch(changeContrast(e.target.value));
    };

    const complexityHandler = (e) => {
        dispatch(changeComplexity(e.target.value));
    };

    return (
        <div className={styles["options"]}>
            <div className={styles["options-toggler"]}>
                <a onClick={optionTwoHandler}><BiCustomize /> CUSTOMIZE</a>
                {optionTwo ? <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd"></path></svg> : <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" focusable="false" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
            </div>
            {optionTwo && <div className={styles["options-body"]}>
                <div>
                    <label htmlFor="customRange1" className="form-label">Edges:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span><TbTriangle size={20} /></span>
                        <input type="range" className="form-range" min={3} max={8} defaultValue={3} onChange={complexityHandler} />
                        <span><TbOctagon size={20} /></span>
                    </div>
                </div>
                <div>
                    <label htmlFor="customRange1" className="form-label">Smoothness:</label>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <span><TbCircle size={20} /></span>
                        <input type="range" className="form-range" min={1} max={10} defaultValue={1} onChange={contrastHandler} />
                        <span><GiWaterSplash size={20} /></span>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default Shape;