import Image from "next/image";
import styles from "../styles/Links.module.scss";

type Props = {
  setCurrentSection: (currentSection: number) => void;
};

const Links = ({ setCurrentSection }: Props) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => {
          setCurrentSection(2);
        }}
        className={styles.btn}
        type="button"
      >
        <Image src="/svgs/link.svg" width={24} height={24} alt="link" />
        Share Play Link
      </button>
      <button
        onClick={() => {
          setCurrentSection(3);
        }}
        className={styles.btn}
        type="button"
      >
        <Image src="/svgs/globe.svg" width={24} height={24} alt="link" />
        Search Online
      </button>
      <button className={styles.btn} type="button">
        <Image src="/svgs/robot.svg" width={24} height={24} alt="link" />
        Play Computer
      </button>
    </div>
  );
};

export default Links;
