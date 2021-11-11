import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Page from '../components/page';

const IndexPage = () => {
  const { contentfulPage } = useStaticQuery(graphql`
    query {
      contentfulPage(slug: { eq: "about" }) {
        content {
          raw
          references {
            __typename
            ... on ContentfulAsset {
              contentful_id
              file {
                url
              }
              title
            }
            ... on ContentfulImage {
              contentful_id
              title
              image {
                file {
                  url
                }
                title
              }
              url
            }
          }
        }
        slug
        title
      }
    }
  `);

  return <Page contentfulPage={contentfulPage} />;
};

export default IndexPage;
