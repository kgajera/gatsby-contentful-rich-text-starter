import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Container from './container';

const Navigation = () => {
  const { contentfulNavigation } = useStaticQuery(graphql`
    query {
      contentfulNavigation(slug: {eq: "header-navigation"}) {
        navigationItems {
          ... on ContentfulNavigationItem {
            id
            slug
            title
          }
          ... on ContentfulPage {
            id
            title
            slug
          }
        }
      }
    }
  `);

  return (
    <Container
      as="nav"
      className="flex items-center py-5 mb-5 border-b"
      role="navigation"
      aria-label="Main"
    >
      <div className="flex-grow">
        <Link className="flex items-center" to="/">
          <img
            className="max-h-8 inline-block mr-2"
            src="/icon.png"
            alt="Logo"
          />
          Gatsby Contentful Starter
        </Link>
      </div>
      <ul>
        {contentfulNavigation.navigationItems.map((item, i) => (
          <li key={i} className="inline-block px-3">
            <Link className="text-blue-600" to={item.slug}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
