import { useState } from "react"
import { TbOctagon, TbCircle, TbTriangle } from 'react-icons/tb';
import { GiWaterSplash } from 'react-icons/gi';
import { TfiPaintBucket } from 'react-icons/tfi';
import { BiCustomize } from 'react-icons/bi';
import { HexColorPicker } from "react-colorful"
import styles from './sidebar.module.css'

function Sidebar({ color, setColor }) {

    const [optionOne, setOptionOne] = useState(true)
    const [optionTwo, setOptionTwo] = useState(false)

    const optionOneHandler = () => {
        setOptionOne(state => { return !state })
    }

    const optionTwoHandler = () => {
        setOptionTwo(state => { return !state })
    }


    return (
        <div className={['container', "p-0", styles["sidebar"]]}>
            <div>
                <div className={styles["options"]}>
                    <div className={styles["options-toggler"]}>
                        <a onClick={optionOneHandler}><TfiPaintBucket /> BLOB FILL</a>
                        <span>&#x25BC;</span>
                    </div>
                    {optionOne && <div className={styles["options-body"]}>
                        <div>
                            <div className="btn-group">
                                <button type="button" className={[styles["btn-custom"]]} data-bs-toggle="dropdown" aria-expanded="false">
                                    <b>Solid</b>
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
                                <a data-bs-toggle="dropdown"><div className={styles["color-selector"]} style={{ backgroundColor: color }}></div></a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <div className={styles["color-picker"]}>
                                            <p>Pick a color</p>
                                            <HexColorPicker color={color} onChange={setColor} />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>}
                </div>

                <div className={styles["options"]}>
                    <div className={styles["options-toggler"]}>
                        <a onClick={optionTwoHandler}><BiCustomize /> CUSTOMIZE</a>
                        <span>&#x25BC;</span>
                    </div>
                    {optionTwo && <div className={styles["options-body"]}>
                        <div>
                            <label htmlFor="customRange1" className="form-label">Edges:</label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span><TbTriangle size={20} /></span>
                                <input type="range" className="form-range" min={3} max={8} defaultValue={3} />
                                <span><TbOctagon size={20} /></span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="customRange1" className="form-label">Smoothness:</label>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <span><TbCircle size={20} /></span>
                                <input type="range" className="form-range" min={1} max={10} defaultValue={1} />
                                <span><GiWaterSplash size={20} /></span>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar