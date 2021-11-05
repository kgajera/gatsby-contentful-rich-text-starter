import * as React from 'react';
import { graphql } from 'gatsby';
import Page from '../components/page';

const PageTemplate = ({ data }) => {
  return <Page contentfulPage={data.contentfulPage} />;
};

export default PageTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
      content {
        raw
      }
      title
    }
  }
`;
