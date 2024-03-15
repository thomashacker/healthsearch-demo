import '@/styles/globals.css';
import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleAnalytics } from '@next/third-parties/google'
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <Html lang="en">
            <Head>
                <GoogleAnalytics gaId="G-QDWDLFK50G" />
            </Head>
            <Component {...pageProps} />;
        </Html>)

}
