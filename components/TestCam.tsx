import Image from 'next/image';
import styles from '../styles/TestCam.module.scss';

const TestCam = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <Image
            src="/svgs/ic-warning.svg"
            height={46}
            width={46}
            alt="warning-svg"
          />
          <h1>Test Camera</h1>
          <p>
            Please ensure that your camera is properly set up and that you are
            in a properly lit room.
          </p>
          <button className={styles.test__btn} type="button">
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestCam;
