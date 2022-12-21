import styles from '../sidebar.module.css';
import { TfiPaintBucket } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeType } from '../../../store/slices/svgSlice';
import Solid from './solid';
import Outline from './outline';
import LinearGradient from './linearGradient';
import RadialGradient from './radialGradient';

function Fill() {
  const [collapse, setCollapse] = useState(true);
  const [solid, setSolid] = useState(true);
  const [outline, setOutline] = useState(false);
  const [linear, setLinear] = useState(false);
  const [radial, setRadial] = useState(false);
  const svgState = useSelector((state) => state.svg);
  const dispatch = useDispatch();

  const collapseHandler = () => {
    setCollapse((state) => {
      return !state;
    });
  };

  const typeHandler = (e) => {
    switch (e.target.innerHTML.toLowerCase()) {
      case 'solid': {
        setSolid(true);
        setOutline(false);
        setLinear(false);
        setRadial(false);
        break;
      }
      case 'outline': {
        setSolid(false);
        setOutline(true);
        setLinear(false);
        setRadial(false);
        break;
      }
      case 'linear gradient': {
        setSolid(false);
        setOutline(false);
        setLinear(true);
        setRadial(false);
        break;
      }
      case 'radial gradient': {
        setSolid(false);
        setOutline(false);
        setLinear(false);
        setRadial(true);
        break;
      }
    }
    dispatch(changeType(e.target.innerHTML.toLowerCase()));
  };

  return (
    <div className={styles['options']}>
      <div className={styles['options-toggler']}>
        <a onClick={collapseHandler}>
          <TfiPaintBucket /> BLOB FILL
        </a>
        {collapse ? (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              // eslint-disable-next-line max-len
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        ) : (
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 20 20"
            aria-hidden="true"
            focusable="false"
            height="16"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              // eslint-disable-next-line max-len
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        )}
      </div>
      {collapse && (
        <div className={styles['options-body']}>
          <div>
            <p>Fill type:</p>
            <div>
              <button
                type="button"
                className=
                  {`btn ${solid ? 'btn-success' : 'btn-outline-success'} m-1`}
                onClick={typeHandler}
              >
                Solid
              </button>
              <button
                type="button"
                className=
                  {`btn ${outline ? 'btn-success' : 'btn-outline-success'} m-1`}
                onClick={typeHandler}
              >
                Outline
              </button>
              <button
                type="button"
                className=
                  {`btn ${linear ? 'btn-success' : 'btn-outline-success'} m-1`}
                onClick={typeHandler}
              >
                Linear gradient
              </button>
              <button
                type="button"
                className=
                  {`btn ${radial ? 'btn-success' : 'btn-outline-success'} m-1`}
                onClick={typeHandler}
              >
                Radial gradient
              </button>
            </div>
          </div>
          <div>
            {svgState.type === 'solid' && <Solid />}
            {svgState.type === 'outline' && <Outline />}
            {svgState.type === 'linear gradient' && <LinearGradient />}
            {svgState.type === 'radial gradient' && <RadialGradient />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Fill;
