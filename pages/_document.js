import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-theme="dark">
      <Head>
        <script defer src="https://analytics.archipelagoapps.com/script.js" data-website-id="99dd9c60-0fbb-4c7e-807d-d55d5ec30f99"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
