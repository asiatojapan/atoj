import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="px-8 md:px-32 hero flex items-center sm:text-center">
        <div class="py-32 md:pt-32 md:pb-56 text-gray-900 max-w-2xl mx-auto text-center">
          <h1 class="text-6xl sm:text-6xl font-light leading-tight mb-4">
                きっかけから活躍まで
            </h1> 
            <p class="text-thin text-gray-600 text-sm">
            We help businesses identify what makes them unique through an impactful brand discovery workshop.
            </p> 
            
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="/register" class="hover:text-green-600 transition text-green-700 underline">
              Get started
            </a>
            </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
          <a href="/register" class="hover:text-gray-600 transition text-gray-700 underline">
              Download
            </a>
          </div>
        </div>
          </div>
      </div>

      <img alt="Office deck photo with man and woman" class="Image" src="https://d1wtrdup4rnaqb.cloudfront.net/assets/work_cobrooklynoffice101-1579284375.jpg" title=""/>

    <div class="px-16">
        <div class="py-32 md:pt-32 md:pb-16 text-gray-900 md:w-9/12 flex flex-col justify-center p-4">
        <p class="text-thin text-gray-600 text-6xl mb-12" style={{fontFamily: "Graphik Thin"}}>
           What we do?
            </p> 
                <div class="text-xl leading-relaxed mb-4">
          留学生採用では難しい＜IT＞＜機械＞＜電気・電子＞など「理系で日本語のできる学生」の採用を、インド、シンガポール、中国、マレーシア、ベトナム、タイ、インドネシア、フィリピン、台湾といった、各国のトップクラスの大学を対象にした、「学内での無料日本語授業」を提供することで実現。人材紹介（エージェント）機能から、内定者への日本語教育まで行う「採用フルサポートサービス」で課題に応えます。
            </div> 
        </div>
      </div>
      
      <div class="px-16">
      <div class="py-32 md:pt-32 md:pb-16 text-gray-900 md:w-9/12 flex flex-col justify-center p-4">
        <p class="text-thin text-gray-600 text-6xl mb-12" style={{fontFamily: "Graphik Thin"}}>
           Posts
            </p> 
      <ul style={{ listStyle: "none" }}>
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
                  style={{ fontSize: 33, marginTop:0 }}
                /></Link>
                <p style={{ margin: 0, color: "grey", fontSize:16, marginTop:8, marginBottom:10 }}>
                   {post.node.date}
                </p>
               
              </div>

          </li>
        ))}
      </ul>
      </div></div>
    </Layout>
  )
}
export default IndexPage
export const query = graphql`
  query {
    allWordpressPost(limit: 6) {
      edges {
        node {
          title
          content
          slug
          excerpt
          wordpress_id
          path
          date(formatString: "MMMM DD, YYYY")
          featured_media {
            localFile {
              childImageSharp {
                fixed(width: 1000) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`