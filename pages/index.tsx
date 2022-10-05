import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Leaderboard } from "../components";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          src="/images/rps-logo.png"
          height={226}
          width={350}
          alt="rps-logo"
          objectFit="contain"
        />
        <Leaderboard />
        <div className={styles.play__buttons}>
          <button type="button">Play as guest</button>
          <Link href="/login">
            <button type="button">Sign In/Sign Up</button>
          </Link>
          <button type="button">How to play</button>
        </div>
      </main>
    </div>
  );
};

export default Home;
