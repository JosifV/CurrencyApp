import Nav from "./nav";
import Head from "next/head";
import Footer from "./footer";

const Layout = props => {
  return (
    <div>
      <Head>
        <title>Exchange App</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/solar/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossorigin="anonymous"
        />
      </Head>
      <Nav />
      <div className="container">{props.children}</div>
      <Footer />
    </div>
  );
};
export default Layout;
