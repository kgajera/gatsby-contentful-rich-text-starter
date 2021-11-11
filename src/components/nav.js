import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Container from './container';
import Link from './link';

const Navigation = () => {
  const { contentfulNavigation, site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      contentfulNavigation(slug: { eq: "header-navigation" }) {
        navigationItems {
          __typename
          ... on ContentfulNavigationItem {
            contentful_id
            title
            url
          }
          ... on ContentfulPage {
            contentful_id
            slug
            title
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
          {site.siteMetadata.title}
        </Link>
      </div>
      <ul>
        {contentfulNavigation.navigationItems.map((item, i) => (
          <li key={i} className="inline-block px-3">
            <Link
              className="text-blue-600"
              to={item.slug ? `/${item.slug}` : item.url}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Navigation;
