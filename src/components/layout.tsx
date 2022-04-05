import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import "./layout.scss";

interface LayoutProps {
  pageTitle: string;
  children: any;
}

const Layout = (props: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="container">
      <title>
        {props.pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>{data.site.siteMetadata.title}</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{props.pageTitle}</h1>
        {props.children}
      </main>
    </div>
  );
};

export default Layout;
