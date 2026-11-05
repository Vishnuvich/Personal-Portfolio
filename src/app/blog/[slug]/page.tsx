import { getMediumPostById } from '@/actions/blog-action'
import { getLocalDate } from '@/utils/utils'
import React from 'react'
import Link from 'next/link'
import { ArrowIcon } from '@/components/site/Icon'

async function BlogPage({ params }: { params: { slug: string } }) {
  const post = await getMediumPostById(params.slug)
  return (
    <div className="blog-wrap">
      <div className="wrap">
        <Link className="link ink" href="/blog" style={{ marginBottom: 28 }}>
          <span style={{ display: 'inline-flex', transform: 'scaleX(-1)' }}>
            <ArrowIcon />
          </span>
          All notes
        </Link>
        <h1 style={{ fontSize: 'clamp(34px, 4.6vw, 60px)', lineHeight: 1.04, fontWeight: 750, maxWidth: '22ch' }}>
          {post?.title}
        </h1>
        <div className="post-meta">
          {post?.author ? <span>By {post.author} · </span> : null}
          <span>Published on {getLocalDate(post?.pubDate)}</span>
        </div>
        <div className="blog-post" dangerouslySetInnerHTML={{ __html: post?.content || '<div></div>' }} />
        <ul className="chips" style={{ marginTop: 48 }}>
          {post?.categories?.map((category: string) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default BlogPage
