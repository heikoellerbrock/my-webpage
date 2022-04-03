import { Link } from "gatsby";
import * as React from "react";
import { container } from "./layout.module.css";

interface LayoutProps {
  pageTitle: string;
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={container}>
      <title>{props.pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
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
