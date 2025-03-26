import React from 'react';
import NavLink from './NavLink.jsx';
const AfterNavLinks = ({ payload, user }) => {
    if (!user) {
        return null;
    }
    const href = `${payload.getAdminURL()}/breaking-plugin-demo`;
    return (<div className="nav-group">
      <div className="nav-group__content">
        <NavLink href={href}/>
      </div>
    </div>);
};
export default AfterNavLinks;
//# sourceMappingURL=AfterNavLinks.jsx.map