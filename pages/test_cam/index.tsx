import { Sidebar, TestCamComponent } from '../../components';
import styles from './page.module.scss';

const TestCam = () => {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <TestCamComponent />
    </div>
  );
};

export default TestCam;
