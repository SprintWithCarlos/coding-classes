import React from 'react'
import Post from '../components/PostCard'
export default function PostsList(props) {

  return (
    
      <main className="main">
        <h1>Our Blog</h1>
        <section className="content">
          <ul>
            {props.posts.map(post => {
              return (
                <li key={post._id}>
                  <Post post={post} />
                </li>
              )
            }
            )
            }
          </ul>
        </section>
      </main>
  
  )
 
}
