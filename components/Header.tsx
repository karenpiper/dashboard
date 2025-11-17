import Link from 'next/link'
import Navigation from './Navigation'
import ProfileDropdown from './ProfileDropdown'
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.topBar}>
      <div className={styles.topBarLeft}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoPlaceholder}>LOGO</div>
        </Link>
        <Navigation />
      </div>
      <div className={styles.topBarRight}>
        <ProfileDropdown />
      </div>
    </header>
  )
}

