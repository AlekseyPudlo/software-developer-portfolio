import '../styles/globals.css'; // Adjust the path to your globals.css file accordingly
import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
