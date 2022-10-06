import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Login.module.scss";
import { useState } from "react";
import Link from "next/link";

const Login: NextPage = () => {
  const [nextComp, setNextComp] = useState<number>(1);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            height={102}
            width={102}
            alt="rps-logo"
            style={{
              cursor: "pointer",
            }}
          />
        </Link>
        <form className={styles.form}>
          <header className={styles.header}>
            <h1
              className={(nextComp === 1 && styles.active) || ""}
              onClick={() => setNextComp(1)}
            >
              Sign in
            </h1>
            <h1
              className={(nextComp === 2 && styles.active) || ""}
              onClick={() => setNextComp(2)}
            >
              Register
            </h1>
          </header>
          {nextComp === 1 && (
            <div className={(nextComp === 1 && styles.animate) || ""}>
              <input type="text" id="email" placeholder="Username or email" />
              <input type="password" id="password" placeholder="Password" />
              <button type="submit">Sign in</button>
            </div>
          )}
          {nextComp === 2 && (
            <div className={(nextComp === 2 && styles.animate) || ""}>
              <input type="text" id="email" placeholder="Username or email" />
              <input type="password" id="password" placeholder="Password" />
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm password"
              />
              <button type="submit">Register</button>
            </div>
          )}

          <p>Forgot password?</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
