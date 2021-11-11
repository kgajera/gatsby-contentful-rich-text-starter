import * as React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';

const options = {
  renderMark: {
    [MARKS.CODE]: (text) => (
      <code className="bg-gray-200 text-sm p-1 rounded">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (node, children) => (
      <h1 className="text-3xl md:text-4xl my-3">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <h2 className="text-2xl md:text-3xl my-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <h3 className="text-xl md:text-2xl my-3">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <h4 className="text-lg md:text-xl my-3">{children}</h4>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <h5 className="text-md md:text-lg my-3">{children}</h5>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <h6 className="text-base md:text-md my-3">{children}</h6>
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
