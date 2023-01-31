// import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ConfigProvider, Button } from "antd";
import { theme } from "../antd/theme";
import Layout from "../components/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
