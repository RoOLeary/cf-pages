import React, { useEffect } from 'react';
import Layout from '../../components/layout'
import {useRouter} from 'next/router'
import Link from 'next/link'


export default function Post({ post }){
    const router = useRouter()
    if(router.isFallback) {
       console.log('Loading...')
    }
    return(
        <Layout>
            <div className="container mx-auto md:px-12">
                <article className="relative z-10 w-full flex flex-wrap mb-24">
                    <div className="w-full bg-white p-12 md:p-24 bg-white">
                        <h1 className="text-2xl md:text-5xl font-black text-gray-800 tracking-widest leading-tight mb-4">
                          {post ? post[0].title.rendered : ''}
                        </h1>
                        <small><strong>By Ro</strong></small>
                        <div className="max-w-m font-serif leading-loose tracking-wide text-lg text-black mt-6 mb-12 format-content" dangerouslySetInnerHTML={{ __html : post ? post[0].content.rendered: 'Loading'}} />
                        <br />
                        <Link href="/blog">Back to blog</Link>
                    </div>
                </article>
            </div>
        </Layout>
        )
    }
    // This also gets called at build time
    export async function getServerSideProps(context) {
        const { slug } = context.query
        const res = await fetch(`https://ronan-oleary.com/wp-json/wp/v2/posts?slug=${slug}`);
        const post = await res.json();
        return {
            props: {
               post
            }
        };
    }
