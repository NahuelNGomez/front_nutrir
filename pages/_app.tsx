import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "../src/template/createEmotionCache";
import Layout from "./_layout";
import {  AppCtxProvider, userType } from "../src/contexts/store";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pageProps:{
    user:userType
  }
}

function MyApp({
  Component,
  pageProps, 
  emotionCache = clientSideEmotionCache,
}: MyAppProps) {
 
  return (
    <AppCtxProvider user={pageProps.user}>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CacheProvider>
    </AppCtxProvider>
  );
}


export default MyApp;