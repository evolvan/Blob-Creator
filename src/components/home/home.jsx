import Canvas from '../canvas/canvas';
import Sidebar from '../sidebar/sidebar';
import styles from './home.module.css';

function Home() {
  return (
    <>
      <div className={styles['main-layout']}>
        <div className={styles['sidebar']}>
          <Sidebar />
        </div>
        <div className={styles['canvas']}>
          <Canvas />
        </div>
      </div>
    </>
  );
}

export default Home;
