
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const PostNews = () => {
    const data = useStaticQuery(graphql`
      query {
        allWordpressPost(limit: 6, filter: {categories: {elemMatch: {name: {eq: "NEWS"}}}}) {
            edges {
              node {
                title
                content
                slug
                excerpt
                wordpress_id
                path
                categories {
                  name
                }
                date(formatString: "MMMM DD, YYYY")
        
              }
            }
          }
      }
    `)
  
    return (
        <ul>
        {data.allWordpressPost.edges.map(post => (
            <li key={post.node.wordpress_id}>
                <div>
                  <Link
                    to={`/${post.node.path}`}
                    style={{
                      // display: "flex",
                      color: "black",
                      textDecoration: "none",
                    }}
                  > <h3
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                    style={{ fontSize: 20, marginTop:0 }}
                  /></Link>
                  <p style={{ margin: 0, color: "grey", fontSize:16, marginTop:8, marginBottom:10 }}>
                     {post.node.date}
                  </p>
                </div>

            </li>
          ))}</ul>
    )
  }
  
  export default PostNews
