import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";

interface BlogProps {
  data: any;
}

const Blog = (props: BlogProps) => {
  return (
    <Layout pageTitle="Blog">
      <ul>
        {props &&
          props.data &&
          props.data.allFile.nodes.map((node: any) => (
            <li key={node.name}>{node.name}</li>
          ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
