import React from 'react'
import Layout from '../../components/Layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Link from 'next/link'
import Head from 'next/head'
import Date from '../../components/date'

export default function Post({ postData }) {
    return (

        <Layout>
            <Date dateString={postData.date} />
            <Head>
                <title>{postData.title}</title>
            </Head>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br></br>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        </Layout>
    )
}
export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
