import * as React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import Heading from './heading';

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-200 text-sm p-1 rounded w-min overflow-hidden">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
    [BLOCKS.HEADING_2]: (node, children) => (
      <Heading as="h2">{children}</Heading>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <Heading as="h3">{children}</Heading>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <Heading as="h4">{children}</Heading>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <Heading as="h5">{children}</Heading>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <Heading as="h6">{children}</Heading>
    ),
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <p className="my-4 text-base md:text-lg">{children}</p>
    ),
    [BLOCKS.OL_LIST]: (node, children) => (
      <ol className="list-decimal	pl-10 whitespace-pre">{children}</ol>
    ),
    [BLOCKS.UL_LIST]: (node, children) => (
      <ul className="list-disc pl-10 whitespace-pre">{children}</ul>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      const target = node.data.target;
      switch (target.__typename) {
        case 'ContentfulImage':
          return (
            <a href={target.url}>
              <img src={target.image.file.url} alt={target.title} />
            </a>
          );
        default:
          return null;
      }
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => (
      <img src={node.data.target?.file.url} alt={node.data.target?.title} />
    ),
    [INLINES.HYPERLINK]: (node, children) => (
      <a className="text-blue-500 underline" href={node.data.uri}>
        {children}
      </a>
    ),
  },
};

const RichText = ({ document, renderOptions }) => {
  return (
    <>{renderRichText(document, Object.assign({}, options, renderOptions))}</>
  );
};

export default RichText;
