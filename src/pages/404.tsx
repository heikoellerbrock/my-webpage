import * as React from "react";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <main>
      <title>404</title>
      <h1>Diese Seite wurde nicht gefunden...</h1>
      <Link to="/">Startseite</Link>
    </main>
  );
};

export default NotFoundPage;
