import { TbDownload, TbArrowsRandom, TbClipboardText } from 'react-icons/tb';
import { useDispatch, useSelector } from 'react-redux';
import fileDownload from 'js-file-download';
import { useState } from 'react';
import styles from './sidebar.module.css';
import Fill from './fill/fill';
import Shape from './shape';
import { changeData } from '../../store/slices/svgSlice';

function Sidebar() {
  const svgState = useSelector((state) => state.svg);
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();

  const SVG_TEMPLATE = `<svg viewBox="0 0 200 200">
        ${
  svgState.type === 'linear gradient'
    ? `<linearGradient
          id="linear-grad"
          gradientTransform="rotate(${svgState.angle} 0.5 0.5)">
            <stop offset="0%" stop-color="${svgState.gradientColorOne}" />
            <stop offset="100%" stop-color="${svgState.gradientColorTwo}" />
        </linearGradient>`
    : ''
}
        ${
  svgState.type === 'radial gradient'
    ? `<radialGradien
          id="radial-grad"
          r="100%"
          cx="${`${svgState.cx}%`}"
          cy="${`${svgState.cy}%`}">
            <stop offset="0%" stop-color="${svgState.gradientColorOne}" />
            <stop offset="100%" stop-color="${svgState.gradientColorTwo}" />
        </radialGradient>`
    : ''
}
        <path
          fill="${svgState.fill}"
          stroke="${svgState.stroke}"
          stroke-width="${svgState.strokeWidth}"
          d="${svgState.shape}" transform="translate(100 100)" />
</svg>`;

  const dataHandler = () => {
    dispatch(changeData());
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(SVG_TEMPLATE);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const downloadHandler = () => {
    fileDownload(SVG_TEMPLATE, 'blob.svg');
  };

  return (
    <>
      <div className={styles.main}>
        <div id="option-container">
          <Fill />
          <Shape />
        </div>
        <div className={styles['btn-container']}>
          <button
            type="button"
            className="btn btn-outline-success"
            onClick={dataHandler}
          >
            <TbArrowsRandom />
            {' '}
            Generate
          </button>
          <button
            type="button"
            className="btn btn-success"
            data-bs-toggle="modal"
            data-bs-target="#svgCodeModal"
          >
            <TbClipboardText />
            {' '}
            Copy
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={downloadHandler}
          >
            <TbDownload />
            {' '}
            Download
          </button>
        </div>
      </div>
      <div className={styles.logo}>
        <h1>
          <b>
            Made by
            {' '}
            <a
              href="https://in.linkedin.com/in/manjot-s-gill"
              target="_blank"
              rel="noreferrer"
            >
              Manjot
            </a>
            {' '}
            at
            {' '}
            <a href="https://evolvan.com" target="_blank" rel="noreferrer">
              Evolvan
            </a>
          </b>
        </h1>
      </div>

      <div className="modal fade" id="svgCodeModal" tabIndex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <pre>
                <code>{SVG_TEMPLATE}</code>
              </pre>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className={`btn ${
                  copied ? 'btn-success' : 'btn-outline-success'
                }`}
                onClick={copyHandler}
              >
                <TbClipboardText />
                {' '}
                {copied ? 'Copied' : 'Copy to clipboard'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
