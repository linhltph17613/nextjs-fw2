import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models/layout'
import Layout from '../components/Layout'
import { SWRConfig } from 'swr'
import instance from '../api/instance'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWapper = Component.Layout ?? Layout
  return (
    <LayoutWapper>
      <SWRConfig value={{fetcher: async (url) => await instance.get(url)}}>
        <Component {...pageProps} />
      </SWRConfig>
    </LayoutWapper>
  );}

export default MyApp
