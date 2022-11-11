import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Navbar from '../@components/navbar'
import Footer from '../@components/footer'
const myColors = require("../../themeOveride.js")
const theme = createTheme({
  palette: myColors
})

const Layout = ({children}: {children: React.ReactNode}) => {
  return <>
    <Navbar />
      {children}
    <Footer />
  </> 
}

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
}
