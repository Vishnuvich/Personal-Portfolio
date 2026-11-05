import React from 'react'
import Link from 'next/link'
import { getLocalDate } from '@/utils/utils'

interface BlogListProps {
  posts: any
}

function BlogList({ posts }: BlogListProps) {
  if (!posts?.length) {
    return <p style={{ marginTop: 48 }}>No posts to show right now. Find them on Medium instead.</p>
  }
  return (
    <div className="post-grid">
      {posts.map((post: any) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="post-card">
          <h3>{post.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: post.description.split('</p>')[0] }} />
          <small>Published on {getLocalDate(post.pubDate)}</small>
        </Link>
      ))}
    </div>
  )
}

export default BlogList
