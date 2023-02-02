import styles from '../styles/TestCamComponent.module.scss';
import SelectSkin from './SelectSkin';
import TestCam from './TestCam';

const TestCamComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <SelectSkin />
        <TestCam />
      </div>
    </div>
  );
};

export default TestCamComponent;
