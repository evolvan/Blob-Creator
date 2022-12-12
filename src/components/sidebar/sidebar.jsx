import { useState } from "react"
import { HexColorPicker } from "react-colorful"
import styles from './sidebar.module.css'

function Sidebar({color, setColor}) {

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
                        <a onClick={optionOneHandler}>BLOB FILL</a>
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
                        <a onClick={optionTwoHandler}>CUSTOMIZE</a>
                        <span>&#x25BC;</span>
                    </div>
                    {optionTwo && <div className={styles["options-body"]}>
                        <div>
                            <label htmlFor="customRange1" class="form-label">Edges:</label>
                            <input type="range" class="form-range" min={3} max={8} defaultValue={3} />
                        </div>
                        <div>
                            <label htmlFor="customRange1" class="form-label">Smoothness:</label>
                            <input type="range" class="form-range" min={1} max={10} defaultValue={1} />
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar