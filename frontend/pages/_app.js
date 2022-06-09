import '../styles/globals.css'
import Airtable from 'airtable'

Airtable.configure({ apiKey: 'keyFd5A4fpY1Ztt5S' })

// eslint-disable-next-line react/prop-types
function MyApp({ Component, pageProps }) {
    // eslint-disable-next-line react/react-in-jsx-scope
    return <Component {...pageProps} />
}

export default MyApp
