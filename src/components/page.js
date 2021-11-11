import * as React from 'react';
import Layout from './layout';
import RichText from './rich-text';
import Seo from './seo';

const Page = ({ contentfulPage }) => {
  return (
    <Layout>
      <Seo title={contentfulPage.title} />
      <h1 className="mb-4 text-4xl">{contentfulPage.title}</h1>
      <RichText document={contentfulPage.content} />
    </Layout>
  );
};

export default Page;
