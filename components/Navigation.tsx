'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navigation.module.css'

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/snaps', label: 'Snaps' },
  { href: '/resources', label: 'Resources' },
  { href: '/work', label: 'Work' },
  { href: '/team', label: 'Team' },
  { href: '/vibes', label: 'Vibes' },
]

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className={styles.navigation}>
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${styles.navItem} ${isActive ? styles.active : ''}`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

