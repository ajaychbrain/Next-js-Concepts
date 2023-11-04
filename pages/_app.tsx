import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "../pages/header"
import NextProgress from 'nextjs-progressbar';
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextProgress />
  <Header />
  <Component {...pageProps} />
  </>
  )
}
