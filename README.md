<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Contentful Starter
</h1>

A Gatsby starter using [Contentful](https://www.contentful.com) (CMS) and [Tailwind](https://tailwindcss.com/) (CSS framework). In particular, this starter leverages Contentful's [Rich Text](https://www.contentful.com/developers/docs/concepts/rich-text/) field to render content.

## Getting Started

1. Use the Gatsby CLI ([install instructions](https://www.gatsbyjs.com/docs/tutorial/part-0/#gatsby-cli)) to create a new site, specifying the gatsby-contentful-starter.

   ```shell
   # create a new Gatsby site using the gatsby-contentful-starter
   gatsby new my-contentful-starter https://github.com/kgajera/gatsby-contentful-starter
   ```

1. Navigate into your new site’s directory:

   ```shell
   cd my-contentful-starter/
   ```

1. Create a new [environment file](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/), `.env.development`, with the following contents:

   ```
   CONTENTFUL_ACCESS_TOKEN=
   CONTENTFUL_SPACE_ID=
   ```

1. Run `yarn contentful-import` to import content types

1. Run `yarn develop` to start the development server. Your site is now running at `http://localhost:8000`!

## Deploy

Deploy this starter with one click on [Gatsby Cloud](https://www.gatsbyjs.com/cloud/):

[<img src="https://www.gatsbyjs.com/deploynow.svg" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/kgajera/gatsby-contentful-starter)
