import '../styles/globals.css'
import Airtable from 'airtable'

Airtable.configure({ apiKey: 'keyFd5A4fpY1Ztt5S' })

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
