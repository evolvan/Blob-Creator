import { useDispatch, useSelector } from 'react-redux';
import { HexColorPicker } from 'react-colorful';
import { changeFill } from '../../../store/slices/svgSlice';
import styles from '../sidebar.module.css';

function Solid() {
  const svgState = useSelector((state) => state.svg);
  const dispatch = useDispatch();

  const fillHandler = (value) => {
    dispatch(changeFill(value));
  };

  return (
    <>
      <p>Color:</p>
      <div className="btn-group">
        <button type="button" data-bs-toggle="dropdown">
          <div
            className={styles['color-selector']}
            style={{ backgroundColor: svgState.fill }}
          />
        </button>
        <ul className="dropdown-menu">
          <li>
            <div className={styles['color-picker']}>
              <p>Pick a color</p>
              <HexColorPicker color={svgState.fill} onChange={fillHandler} />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Solid;
