import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GoogleTagManager } from '@next/third-parties/google'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <GoogleTagManager gtmId="G-QDWDLFK50G" />
        </>
    )
}
