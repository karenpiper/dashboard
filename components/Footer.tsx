import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerLinks}>
          <Link href="#">Quick Links</Link>
          <Link href="#">Help</Link>
          <Link href="#">Feedback</Link>
        </div>
        <div className={styles.footerBranding}>
          <p>© 2025 Dashboard. Built with team vibes in mind.</p>
        </div>
        <div className={styles.footerAdmin}>
          <Link href="#">Admin Panel (only for admins)</Link>
        </div>
      </div>
    </footer>
  )
}

