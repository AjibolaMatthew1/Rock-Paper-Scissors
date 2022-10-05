import Image from "next/image";

type Props = {
  styles: any;
  changeRound: number;
  setChangeRound: (arg0: number) => void;
  setCurrentSection: (arg0: number) => void;
};

const SelectRound = ({
  styles,
  changeRound,
  setChangeRound,
  setCurrentSection,
}: Props): JSX.Element => {
  return (
    <>
      <h1>Select number of rounds</h1>
      <div className={styles.rounds__selector}>
        <Image
          src="/svgs/ic-chevron-white-left.svg"
          width={12}
          height={20}
          alt="left"
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            if (changeRound === 0) {
              setChangeRound(4);
            } else {
              setChangeRound(changeRound - 1);
            }
          }}
        />
        <div className={styles.rounds__slider}>
          <div className={styles.rounds__slider__inner}>
            {changeRound === 0 && (
              <div className={styles.rounds__slider__inner__round}>3</div>
            )}
            {changeRound === 1 && (
              <div className={styles.rounds__slider__inner__round}>5</div>
            )}
            {changeRound === 2 && (
              <div className={styles.rounds__slider__inner__round}>7</div>
            )}
            {changeRound === 3 && (
              <div className={styles.rounds__slider__inner__round}>9</div>
            )}
            {changeRound === 4 && (
              <div className={styles.rounds__slider__inner__round}>11</div>
            )}
          </div>
        </div>
        <Image
          src="/svgs/ic-chevron-white-right.svg"
          width={12}
          height={20}
          alt="right"
          onClick={() => {
            if (changeRound === 4) {
              setChangeRound(0);
            } else {
              setChangeRound(changeRound + 1);
            }
          }}
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <button
        className={styles.select__btn}
        onClick={() => setCurrentSection(1)}
        type="button"
      >
        Next
      </button>
    </>
  );
};

export default SelectRound;
