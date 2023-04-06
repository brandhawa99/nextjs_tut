import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Script from 'next/script'
export default function FirstPost() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }
            />

            <h1>First Post</h1>
            <Image
                src="/images/profilepic.JPG"
                height={144}
                width={144}
                alt="Baltej Randhawa"
            />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}