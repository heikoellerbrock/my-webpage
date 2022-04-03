import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Heiko Ellerbrock`,
    siteUrl: `https://www.heikoellerbrock.de`,
  },
  plugins: ["gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-plugin-sass"],
};

export default config;
