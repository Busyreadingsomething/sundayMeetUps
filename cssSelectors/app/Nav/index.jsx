import React from 'react';
import Link from '../Link/index';

const NavBar = ({ links }) => (
  <ul>
    {
      links.map(nav => <Link key={nav} title={nav} />)
    }
  </ul>
);

export default NavBar;
