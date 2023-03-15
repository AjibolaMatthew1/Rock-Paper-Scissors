import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Links, SelectRound } from "../components";
import styles from "../../styles/Select.module.scss";

const Select: NextPage = () => {
  const [changeImage, setChangeImage] = useState<number>(0),
    [changeRound, setChangeRound] = useState<number>(0),
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
            color: "white",
            textAlign: "center",
            margin: "30px auto -40px",
            textTransform: "uppercase",
            fontWeight: "500",
            fontSize: "31.7778px",
            lineHeight: "33px",
            letterSpacing: "0.04em",
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
                cursor: "pointer",
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
                cursor: "pointer",
              }}
            />
          </div>
          <h2>@JAMANSON</h2>
        </div>
        <div className={styles.select__rounds}>
          {currentSection === 0 && (
            <SelectRound
              styles={styles}
              changeRound={changeRound}
              setChangeRound={setChangeRound}
              setCurrentSection={setCurrentSection}
            />
          )}
          {currentSection === 1 && (
            <Links setCurrentSection={setCurrentSection} />
          )}
          {currentSection === 2 && (
            <h2 className={styles.copy__link}>
              <Image src="/svgs/link.svg" width={24} height={24} alt="link" />
              Click Here To copy Link
            </h2>
          )}
          {currentSection === 3 && (
            <>
              <Image
                src="/images/loader.png"
                height={200}
                width={200}
                alt="loader"
                className={styles.loader}
              />
              <h2
                style={{
                  marginTop: "1rem",
                }}
                className={styles.copy__link}
              >
                Searching for opponent
              </h2>
            </>
          )}
          {currentSection === 4 && (
            <div
              style={{
                position: "relative",
              }}
            >
              <Image
                src="/images/fair-rock-right.png"
                width={218}
                height={124}
                alt="black-skin"
                objectFit="contain"
              />
              <h2
                style={{
                  position: "absolute",
                  left: "0",
                  right: "0",
                  textAlign: "center",
                  marginTop: "15vh",
                }}
                className={styles.copy__link}
              >
                Ajibola
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Select;
