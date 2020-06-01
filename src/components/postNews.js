
import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const PostNews = () => {
    const data = useStaticQuery(graphql`
      query {
        allWordpressPost(limit: 4, filter: {categories: {elemMatch: {name: {eq: "NEWS"}}}}) {
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
                date(formatString: "YYYY.M.D")
        
              }
            }
          }
      }
    `)
  
    return (
        <ul>

      <div>
        {data.allWordpressPost.edges.map(post => (
            <li key={post.node.wordpress_id} v-for="item in items" class="py-1 border-t first:border-t-0">  
                <div>   
                  <p className="text-xs text-gray-600 mb-1">
                     {post.node.date}
                  </p>
                  <Link class="text-black text-sm hover:text-governor-bay-500"
                    to={`/${post.node.path}`}
                  
                  > <div
                    dangerouslySetInnerHTML={{ __html: post.node.title }}
                    class="text-black text-md hover:text-governor-bay-500 transition duration-200 ease-in"
                  /></Link>
                </div>

            </li>
          ))}
          </div>
          </ul>
    )
  }
  
  export default PostNews
