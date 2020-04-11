
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
                    <p style={{ margin: 0, color: "grey", fontSize:16, marginTop:8, marginBottom:10 }}>
                     {post.node.date}
                  </p>
                  <Link class="text-black hover:text-green-700"
                    to={`/${post.node.path}`}
                  
                  > <div
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                    class="text-black text-md hover:text-green-700 hover:underline transition duration-200 ease-in"
                  /></Link>
                </div>

            </li>
          ))}</ul>
    )
  }
  
  export default PostNews
