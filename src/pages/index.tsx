import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Heiko Ellerbrock">
      <h2>Herzlich Willkommen auf meiner Seit.</h2>
      <StaticImage
        alt="Portrait Heiko Ellerbrock"
        src="../images/portrait-L.JPG"
      ></StaticImage>
    </Layout>
  );
};

export default IndexPage;
