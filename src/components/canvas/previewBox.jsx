import styles from './canvas.module.css'

function PreviewBox(props) {
    return (
        <div id={styles["preview"]}>
            <svg viewBox="0 0 200 200" >
                <path fill={props.color}
                    d={props.shape}
                    transform="translate(100 100)" />
            </svg>
        </div>
    )
}

export default PreviewBox