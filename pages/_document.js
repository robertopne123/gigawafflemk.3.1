import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script>
            (function(ss,ex)
            {
              (window.ldfdr =
                window.ldfdr ||
                (function () {
                  (ldfdr._q = ldfdr._q || []).push([].slice.call(arguments));
                })(function (d, s) {
                  fs = d.getElementsByTagName(s)[0];
                  function ce(src) {
                    var cs = d.createElement(s);
                    cs.src = src;
                    cs.async = 1;
                    fs.parentNode.insertBefore(cs, fs);
                  }
                  ce(
                    "https://sc.lfeeder.com/lftracker_v1_" +
                      ss +
                      (ex ? "_" + ex : "") +
                      ".js"
                  );
                })(document, "script"))
            }
            )(&apos;DzLR5a53VMZ7BoQ2&apos;);{" "}
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
