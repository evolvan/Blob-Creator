import styles from './sidebar.module.css';
import { TbDownload, TbArrowsRandom } from 'react-icons/tb'
import Fill from "./fill";
import Shape from './shape';
import { useDispatch } from 'react-redux';
import { changeData } from '../../store/slices/svgSlice';


function Sidebar() {


    const dispatch = useDispatch();

    const dataHandler = () => {
        dispatch(changeData());
    };

    return (
        <div className={styles["bar"]}>
            <div>
                <Fill />
                <Shape />
            </div>
            <div className={styles["btn-container"]}>
                <button type="button" className="btn btn-outline-success" onClick={dataHandler}><TbArrowsRandom /> Generate</button>
                <button type="button" className="btn btn-success"><TbDownload /> Download</button>
            </div>
        </div>
    );
};

export default Sidebar;