import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <GoogleAnalytics gaId="G-QDWDLFK50G" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
