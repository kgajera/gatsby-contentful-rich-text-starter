import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import RichText from '../components/rich-text';
import Seo from '../components/seo';

const BlogPostTemplate = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.contentfulBlogPost.title}
        description={data.contentfulBlogPost.excerpt.excerpt}
      />
      <h1 className="mb-4 text-4xl">{data.contentfulBlogPost.title}</h1>
      <RichText document={data.contentfulBlogPost.content} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      content {
        raw
        references {
          __typename
          ... on ContentfulAsset {
            contentful_id
            file {
              url
            }
          }
        }
      }
      excerpt {
        excerpt
      }
      id
      title
    }
  }
`;
