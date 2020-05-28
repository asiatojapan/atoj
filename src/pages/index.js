import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"
import PostNews from "../components/postNews.js"



const IndexPage = ({ data }) => {

  const header = () => 
   (    
    <section>
    <div class="py-48 md:px-32 hero">
      <div class="grid grid-cols-3 ">

      <div> <img src={data.officeImage.secure_url} alt={"office"} style={{width: "100%", height: "200px"}} className="object-cover"/></div>
      <div className="col-span-2"> 
      <div class="text-7xl leading-tight mb-4">きっかけから活躍まで</div>
      <p class="text-3xl">
        What was our mission again? It's supposed to be at this line.
      </p> 
      </div>
      </div>
    </div>
    </section>
  )


  return (
    <Layout>
      <SEO title="Home" keywords={[`asiatojapan`, `application`, `react`]} />
      {header()}
    

      <img src={data.officeImage.secure_url} alt={"office"} style={{width: "100%", height: "500px"}} className="object-cover"/>
   
  
      <div class="container mx-auto px-4">
        <div class="py-32 md:pt-32 md:pb-16 text-gray-900 md:w-9/12 flex flex-col justify-center">
          <div class="bg-white p-8 z-30">
        <p class="text-black text-6xl mb-12">
        こんな課題はありませんか？		
            </p> 
                <div class="text-xl leading-relaxed mb-4">
          留学生採用では難しい＜IT＞＜機械＞＜電気・電子＞など「理系で日本語のできる学生」の採用を、インド、シンガポール、中国、マレーシア、ベトナム、タイ、インドネシア、フィリピン、台湾といった、各国のトップクラスの大学を対象にした、「学内での無料日本語授業」を提供することで実現。人材紹介（エージェント）機能から、内定者への日本語教育まで行う「採用フルサポートサービス」で課題に応えます。
            </div> 
        </div>
        </div>
      </div>
      
      <div class="container mx-auto px-4 py-32">
        <p class="text-black text-6xl mb-12">
       Latest News
            </p>  
          <PostNews />
    </div>
  

   
  <div class="my-32 bg-black">
    <div class="grid grid-cols-4">
     
      <div class="w-full object-cover" style={{  
                  backgroundImage: `url(http://asiatojapan.com/wp-content/uploads/india.jpg)`,
                    minHeight: "400px",
                    
                  }}>
      
      </div>
   
      <div class="align-middle text-white container mx-auto my-20 px-6 lg:px-6 relative">
        <div class="lg:text-6xl sm:text-4xl leading-tight mb-0">India </div>
       <div class="text-xl mb-4">インド</div>
       <a href="/register" class="hover:text-gray-200 transition duration-200 ease-in text-green-500 underline">
             Read More
        </a>
       </div>


       <div class="bg-cover bg-top bg-center " style={{  
                  backgroundImage: `url(http://asiatojapan.com/wp-content/uploads/shanghai.jpg)`,
                    minHeight: "400px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)"
                  }}>
      
      </div>
   
        <div class="align-middle text-white container mx-auto my-20 px-6 lg:px-6 relative">
        <div class="lg:text-6xl sm:text-4xl leading-tight mb-0">China</div>
       <div class="text-xl mb-4">中国</div>
       <a href="/register" class="hover:text-gray-200 transition duration-200 ease-in text-green-500 underline">
             Read More
        </a>
       </div>
    
    </div>

    <div class="grid grid-cols-4">
    <div class="align-middle text-white container mx-auto my-20 px-6 lg:px-6 relative">
        <div class="lg:text-6xl sm:text-4xl leading-tight mb-0">Malaysia</div>
       <div class="text-xl mb-4">マレーシアマレーシア</div>
       <a href="/register" class="hover:text-gray-200 transition duration-200 ease-in text-green-500 underline">
             Read More
        </a>
       </div>


      <div class="w-full object-cover" style={{  
                  backgroundImage: `url(http://asiatojapan.com/wp-content/uploads/malaysia.jpg)`,
                    minHeight: "400px",
                    
                  }}>
      
      </div>
   

      <div class="align-middle text-white container mx-auto my-20 px-6 lg:px-6 relative">
        <div class="lg:text-6xl sm:text-4xl leading-tight mb-0">Singapore</div>
       <div class="text-xl mb-4">シンガポール</div>
       <a href="/register" class="hover:text-gray-200 transition duration-200 ease-in text-green-500 underline">
             Read More
        </a>
       </div>

       <div class="bg-cover bg-top bg-center " style={{  
                  backgroundImage: `url(http://asiatojapan.com/wp-content/uploads/singapore.jpg)`,
                    minHeight: "400px"
                  }}>
      
      </div>
   
    
    </div>

    </div>



      <div class="container mx-auto px-4 py-32">
        <p class="text-black text-6xl mb-12">
           Posts
        </p> 
      
    
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
     
      </div>

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
    officeImage: cloudinaryMedia(public_id: {eq: "gallery/company-loc_1_tjmrum"}) {
      secure_url
    }
    
  }
`
