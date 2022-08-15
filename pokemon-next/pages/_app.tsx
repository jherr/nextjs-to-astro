import Layout from "../components/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout name={pageProps.pokemon?.name}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
