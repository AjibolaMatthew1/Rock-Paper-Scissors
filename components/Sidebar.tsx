import Image from 'next/image';
import styles from '../styles/Sidebar.module.scss';

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__inner}>
        <div className={styles.sidebar__header}>
          <Image
            src="/images/sidebar-logo.png"
            height={46}
            width={46}
            alt="sidebar-logo"
          />
        </div>

        <div className={styles.sidebar__content}>
          <div className={styles.sidebar__content__inner}>
            <Image
              src="/images/leaderboard.png"
              height={36}
              width={28}
              alt="leaderboard"
            />
          </div>
          <div className={styles.sidebar__content__inner}>
            <Image
              src="/images/book-open.png"
              height={41}
              width={41}
              alt="book-open"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
