import * as React from 'react';
import { Link } from 'gatsby';
import Container from './container';

const links = [
  {
    label: 'Blog',
    link: '/blog',
  },
];

const Navigation = () => {
  return (
    <Container
      as="nav"
      className="flex items-center py-5 mb-5 border-b"
      role="navigation"
      aria-label="Main"
    >
      <div className="flex-grow">
        <Link className="flex items-center" to="/">
          <img className="max-h-8 inline-block mr-2" src="/icon.png" alt="Logo" />
          Gatsby Contentful Starter
        </Link>
      </div>
      <ul>
        {links.map((link) => (
          <li className="inline-block px-3">
            <Link className="text-blue-600" to={link.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
