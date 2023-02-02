import styles from '../styles/SelectSkin.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const SelectSkin = () => {
  const [changeImage, setChangeImage] = useState<number>(0),
    [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    if (currentSection === 3) {
      setTimeout(() => {
        setCurrentSection(4);
      }, 1000);
    }
  }, [currentSection]);
  return (
    <div className={styles.wrapper}>
      {currentSection === 4 && (
        <h1
          style={{
            color: 'white',
            textAlign: 'center',
            margin: '30px auto -40px',
            textTransform: 'uppercase',
            fontWeight: '500',
            fontSize: '31.7778px',
            lineHeight: '33px',
            letterSpacing: '0.04em',
          }}
        >
          Waiting for opponent...
        </h1>
      )}
      <div className={styles.inner}>
        <div className={styles.select__skin__color}>
          <h1>Select skin color</h1>
          <div className={styles.image__selector}>
            <Image
              src="/svgs/ic-chevron-left.svg"
              width={24}
              height={24}
              alt="left"
              onClick={() => {
                if (changeImage === 0) {
                  setChangeImage(1);
                } else {
                  setChangeImage(changeImage - 1);
                }
              }}
              style={{
                cursor: 'pointer',
              }}
            />
            <div className={styles.images}>
              {changeImage === 0 && (
                <Image
                  src="/images/black-rock-left.png"
                  width={218}
                  height={124}
                  alt="black-skin"
                  objectFit="contain"
                />
              )}
              {changeImage === 1 && (
                <Image
                  src="/images/fair-rock-left.png"
                  width={218}
                  height={124}
                  alt="fair-skin"
                  objectFit="contain"
                />
              )}
            </div>
            <Image
              src="/svgs/ic-chevron-right.svg"
              width={24}
              height={24}
              alt="right"
              onClick={() => {
                if (changeImage === 1) {
                  setChangeImage(0);
                } else {
                  setChangeImage(changeImage + 1);
                }
              }}
              style={{
                cursor: 'pointer',
              }}
            />
          </div>
          <h2>@JAMANSON</h2>
        </div>
      </div>
    </div>
  );
}

export default SelectSkin