import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Heiko Ellerbrock`,
    siteUrl: `https://www.heikoellerbrock.de`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `./src/blog`,
      },
    },
  ],
};

export default config;
