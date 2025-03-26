'use client'

import { Link } from '@payloadcms/ui'
import { usePathname } from 'next/navigation'

type NavLinkClientProps = {
  href: string
}

const NavLink = ({ href }: NavLinkClientProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link className={`nav__link ${isActive ? 'active' : ''}`} href={href}>
      {isActive && <div className="nav__link-indicator"></div>}
      <span className="nav__link-label">Local Plugin Demo</span>
    </Link>
  )
}

export default NavLink
