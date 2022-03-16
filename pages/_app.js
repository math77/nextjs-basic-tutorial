import '../styles/global.css'

//top level component common across all pages
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}