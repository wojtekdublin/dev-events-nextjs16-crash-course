'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import posthog from 'posthog-js'

function Navbar() {
  const handleLogoClick = () => {
    posthog.capture('logo_clicked', {
      nav_element: 'logo',
      destination: '/',
    });
  };

  const handleNavClick = (navItem: string, destination: string) => {
    posthog.capture(`nav_${navItem}_clicked`, {
      nav_element: navItem,
      destination: destination,
    });
  };

  return (
    <div>
        <header>
            <nav>
                <Link href="/" className='logo' onClick={handleLogoClick}>
                    <Image src="/icons/logo.png" alt="logo" width={24} height={24} />
                    <p>DevEvent</p>
                </Link>

                <ul>
                    <Link href="/" onClick={() => handleNavClick('home', '/')}>Home</Link>
                    <Link href="/events" onClick={() => handleNavClick('events', '/events')}>Events</Link>
                    <Link href="/about" onClick={() => handleNavClick('create_event', '/about')}>Create Event</Link>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Navbar