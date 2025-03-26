import { type AdminViewServerProps } from 'payload'
import NavLink from './NavLink'

type NavLinkProps = AdminViewServerProps

const AfterNavLinks = ({ payload, user }: NavLinkProps) => {
  if (!user) {
    return null
  }

  const href = `${payload.getAdminURL()}/local-plugin-demo`

  return (
    <div className="nav-group">
      <div className="nav-group__content">
        <NavLink href={href} />
      </div>
    </div>
  )
}

export default AfterNavLinks
