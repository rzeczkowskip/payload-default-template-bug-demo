import { type AdminViewServerProps } from 'payload';
import React from 'react';
type NavLinkProps = AdminViewServerProps;
declare const AfterNavLinks: ({
  payload,
  user,
}: NavLinkProps) => React.JSX.Element | null;
export default AfterNavLinks;
