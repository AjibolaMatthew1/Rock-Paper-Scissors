import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../../styles/Login.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const { pathname } = useRouter();
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Link href="/">
          <Image
            src="/images/rps-logo.png"
            height={107}
            width={165}
            alt="rps-logo"
            style={{
              cursor: 'pointer',
            }}
          />
        </Link>
        <form className={styles.form}>
          <header className={styles.header}>
            <Link href="/login">
              <h1 className={(pathname === '/login' && styles.active) || ''}>
                Sign in
              </h1>
            </Link>
            <Link href="/register">
              <h1 className={(pathname === '/register' && styles.active) || ''}>
                Register
              </h1>
            </Link>
          </header>
          <div className={(pathname === '/login' && styles.animate) || ''}>
            <input type="text" id="email" placeholder="Username or email" />
            <input type="password" id="password" placeholder="Password" />
            <button className={styles.register} type="submit">
              Sign in
            </button>
          </div>

          <p>Forgot password?</p>

          <div className={styles.or}>
            <div className={styles.line}></div>
            <p>or</p>
          </div>

          <button type="button" className={styles.apple}>
            <Image
              src="/svgs/apple.svg"
              height={24}
              width={24}
              alt="apple-logo"
            />
            <p>Sign up with Apple</p>
          </button>

          <button type="button" className={styles.google}>
            <Image
              src="/svgs/google.svg"
              height={24}
              width={24}
              alt="google-logo"
            />
            <p>Sign up with Google</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
