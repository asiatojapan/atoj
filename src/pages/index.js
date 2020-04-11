import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"
import PostNews from "../components/postNews.js"
const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="px-8 md:px-32 hero flex items-center sm:text-center">
        <div class="py-32 md:pt-32 md:pb-56 text-black max-w-2xl mx-auto text-center">
          <div class="text-6xl sm:text-6xl leading-tight mb-4">
                きっかけから活躍まで
            </div> 
            <p class="text-thin text-gray-600 text-sm">
            We help businesses identify what makes them unique through an impactful brand discovery workshop.
            </p> 
            
            <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div class="mt-3 sm:mt-0 sm:ml-3">
            <a href="/register" class="hover:text-green-600 transition duration-200 ease-in text-green-700 underline">
              Get started
            </a>
            </div>
          <div class="mt-3 sm:mt-0 sm:ml-3">
          <a href="/register" class="hover:text-gray-600 ttransition duration-200 ease-in text-gray-700 underline">
              Download
            </a>
          </div>
        </div>
          </div>
      </div>
      <OfficeImage/>

      <div class="px-16">
        <div class="py-32 md:pt-32 md:pb-16 text-gray-900 md:w-9/12 flex flex-col justify-center">
        <p class="text-black text-6xl mb-12">
           What we do?
            </p> 
                <div class="text-xl leading-relaxed mb-4">
          留学生採用では難しい＜IT＞＜機械＞＜電気・電子＞など「理系で日本語のできる学生」の採用を、インド、シンガポール、中国、マレーシア、ベトナム、タイ、インドネシア、フィリピン、台湾といった、各国のトップクラスの大学を対象にした、「学内での無料日本語授業」を提供することで実現。人材紹介（エージェント）機能から、内定者への日本語教育まで行う「採用フルサポートサービス」で課題に応えます。
            </div> 
        </div>
      </div>
      
      <div class="px-16">
        <div class="py-32 md:pt-32 md:pb-16 text-gray-900 md:w-9/12 flex flex-col justify-center">
        <p class="text-black text-6xl mb-12">
       Latest News
            </p>  
          <PostNews />
      </div>
    </div>
  
  <div class="my-16 px-16">
    <div class="grid grid-cols-2 gap-4">
    <div>
    <p class="text-black text-6xl">
       Topics
    </p>  
    </div>
    <div>
    
    <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
            1. インド
            </h3>
            <div class="mt-2">
              <p class="text-base leading-6 text-gray-500">
              Yes. You can add as many websites as you want under a single account. You will be charged for the total pageviews on all of your websites combined. For example, on the 10k plan you can either have 10 websites that each get 1000 pageviews per month, or one website that gets 10,000 pageviews per month.
              </p>
            </div>
          </div>

    </div>
    </div></div>



      <div class="px-16 p-4 py-32">
        <p class="text-black text-6xl mb-12">
           Posts
        </p> 
      
    
      <div class="container mx-auto">
      <div class="flex flex-wrap">
        {data.allWordpressPost.edges.map(post => (
            <div class="w-full sm:w-1/2 lg:w-1/3 sm:pr-10 mb-16" key={post.node.wordpress_id}>
                <div class="flex flex-col items-center">
                  <div class="w-full shadow-inner bg-dark-100 bg-cover bg-top " style={{  
                  backgroundImage: `url(${post.node.featured_media.source_url})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    minHeight: "200px"
                  }}></div>
                  <div class="pt-4">
                  <p class="text-xs mb-0 text-gray-600">
                   {post.node.date} {post.node.categories.map((category) => 
                  <span className="mr-1 text-xs rounded">/ {category.name} </span>)}
                  </p>
                    <Link
                  to={`/${post.node.path}`}
               
                > 
                <div class="text-gray-800 leading-relaxed text-xl text-left hover:text-green-600 hover:underline transition "
                  dangerouslySetInnerHTML={{ __html: post.node.title }}
                  
                /></Link>  
                </div>
                </div>
                </div>
    
        ))} </div>
     
      </div></div>

    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(limit: 6,  filter:  {categories: {elemMatch: {name: {nin: "NEWS"}}}}) {
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
          featured_media {
            source_url
            localFile {
              url
              childImageSharp {
                fluid(maxWidth: 400){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          date(formatString: "YYYY.M.D")

        }
      }
    }
  }
`
