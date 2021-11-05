import * as React from 'react';
import { Helmet } from 'react-helmet';

const Seo = ({ description = '', lang = 'en', title }) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      meta={[
        {
          name: 'description',
          content: description,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
      ]}
    />
  );
};

export default Seo;
