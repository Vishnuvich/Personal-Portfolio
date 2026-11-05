import React from 'react'
import { getMediumPosts } from '../../actions/blog-action'
import BlogList from './BlogList'

const Blog = async () => {
  let posts: any = null
  try {
    posts = await getMediumPosts()
  } catch {
    posts = null
  }
  return (
    <div className="blog-wrap">
      <div className="wrap">
        <h1 style={{ fontSize: 'clamp(40px, 5.4vw, 72px)', lineHeight: 1, fontWeight: 750 }}>Notes from the journey</h1>
        <p style={{ marginTop: 20, fontSize: 19 }}>
          What I figure out while building software and businesses, published on Medium.
        </p>
        <BlogList posts={posts?.items} />
      </div>
    </div>
  )
}

export default Blog
