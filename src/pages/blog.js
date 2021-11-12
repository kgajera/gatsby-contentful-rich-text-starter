import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Heading from '../components/heading';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: createdAt, order: DESC }) {
        edges {
          node {
            slug
            excerpt {
              excerpt
            }
            title
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Recent Posts" />
      <Heading>Recent Posts</Heading>
      {allContentfulBlogPost.edges.map(({ node }) => (
        <div className="my-4" key={node.slug}>
          <h2 className="my-2 text-2xl">
            <Link className="underline" to={`/blog/${node.slug}`}>
              {node.title}
            </Link>
          </h2>
          <p className="text-lg">{node.excerpt?.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
};

export default BlogPage;
