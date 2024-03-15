import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleAnalytics } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <GoogleAnalytics gaId="G-QDWDLFK50G" />
        </>
    )
}
