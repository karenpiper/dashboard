'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './ProfileDropdown.module.css'

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={styles.profileAvatar} ref={dropdownRef}>
      <button
        className={styles.avatarButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Profile menu"
      >
        <div className={styles.avatarPlaceholder}>A</div>
      </button>
      {isOpen && (
        <div className={styles.dropdownMenu}>
          <Link href="/profile" onClick={() => setIsOpen(false)}>
            Profile
          </Link>
          <Link href="/settings" onClick={() => setIsOpen(false)}>
            Settings
          </Link>
          <Link href="/notifications" onClick={() => setIsOpen(false)}>
            Notifications
          </Link>
          <Link href="/logout" onClick={() => setIsOpen(false)}>
            Logout
          </Link>
        </div>
      )}
    </div>
  )
}

