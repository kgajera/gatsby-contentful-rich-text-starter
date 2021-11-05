import * as React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = () => {
  const { allContentfulBlogPost } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
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
      <h1 className="text-4xl mb-4 pb-4">Recent Posts</h1>
      {allContentfulBlogPost.edges.map(({ node }) => (
        <div className="mb-8" key={node.slug}>
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
