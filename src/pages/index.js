import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"
import PostNews from "../components/postNews.js"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const IndexPage = ({ data }) => {

  const header = () => 
   (    
    <section>
    <div class="pt-32 pb-40  text-center  px-48 hero">
     
      <div class="text-7xl text-black leading-tight mb-4">きっかけから活躍まで</div>
      <p class="text-xl">
      We provide opportunities and support for people to find work, live, and grow in Japan.
      </p> 
      </div>
    </section>
  )

  const aboutUs = () => (
    <>
    <div class="py-16 px-32 hero">

    <div class="grid grid-cols-3 gap-5">
      <div>
      <div className="text-md uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>About Us</div> 
          <div className="text-4xl font-bold leading-normal text-black ">
         私たちについて
        </div> 
      </div>

      <div className="col-span-2 leading-loose">
        留学生採用では難しい＜IT＞＜機械＞＜電気・電子＞など「理系で日本語のできる学生」の採用を、
        インド、シンガポール、中国、マレーシア、ベトナム、タイ、インドネシア、フィリピン、台湾といった、
        各国のトップクラスの大学を対象にした、「学内での無料日本語授業」を提供することで実現。
      人材紹介（エージェント）機能から、内定者への日本語教育まで行う「採用フルサポートサービス」で課題に応えます。

      Read More
      </div>

    </div>
  </div> 
  </>
  )

  const services = () => (
    <div class="grid grid-cols-3 mt-0">
      <div> 
        
          <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url(${data.sanpei.secure_url})`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold pb-4">海外トップクラスの学生採用 </div>
                
                <a href="/studygoworkjapan" className="underline pt-10 text-xs"> 詳しくはこちら</a>
              </div>
              </div>
          </div>
          
      </div>

      <div>
       <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url(${data.sanpei.secure_url})`}}>
            <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
              <div className="px-5 py-2">
                <div className="text-2xl leading-loose text-black font-semibold pb-4">採用事例の紹介</div>
                
                <a href="/studygoworkjapan" className="underline pt-10 text-xs"> 詳しくはこちら</a>
              </div>
              </div>
          </div>

      </div>
      
      <div> 
        <div class="relative h-100 bg-opacity-25 bg-cover bg-center" style={{backgroundImage: `url(${data.sanpei.secure_url})`}}>
              <div class="absolute bottom-0 bg-white" style={{bottom: "20px", left:"20px"}}>
                <div className="px-5 py-2">
                  <div className="text-2xl leading-loose text-black font-semibold pb-4"> 内定者向け日本語学習</div>
                  
                  <a href="/studygoworkjapan" className="underline pt-10 text-xs"> 詳しくはこちら</a>
                </div>
                </div>
            </div>
          
        </div>

      </div>
  )

  const news = () => (
    <div class="py-16 px-32 hero">
    <div class="grid grid-cols-3">
      <div>
      <div className="text-md uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>Latest News</div> 
          <div className="text-4xl font-bold leading-normal text-black mb-10 mr-10">
          ニュース
        </div> 
      </div>
      <div className="col-span-2">
      <PostNews />
      </div>
      </div>
    </div>
  )



  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const CustomButtonGroup = ({ next, previous, goToSlide, carouselState }) => {
    const { totalItems, currentSlide } = carouselState;
    return (
      <div className="flex w-full absolute" style={{top: "50%",}}>
        <div className="flex items-center flex-shrink-0">
        <button onClick={() => previous()} className="bg-governor-bay-600 p-5"><i class="arrow left text-white"></i></button>

        </div>

        <div className="w-full block flex-grow flex items-center w-auto">
        <div className="flex justify-end flex-1"> 

          <button onClick={() => next()} className="bg-governor-bay-600 p-5"><i class="arrow right"></i></button></div></div>
      
      </div>
    );
  };


  const CustomDot = ({ onClick, active, index, carouselState }) => {
    const { currentSlide } = carouselState;
    return (
      <li style={{ background: active ? "bg-grey-200" : "bg-black" }}>
        <button
          style={{ background: active ? "bg-grey-200" : "bg-black"}}
          onClick={() => onClick()}
        />
      </li>
    );
  };

  const topics = () => (
    <div class="relative">
    

    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={false}
      centerMode={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container relative"
      itemClass="hover:bg-gray-200 p-3"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      showDots={true}
      customDot={<CustomDot />}
      arrows={false} renderButtonGroupOutside={true} customButtonGroup={<CustomButtonGroup />}
    >
      {data.allWordpressPost.edges.map(post => (
        <Link to={`/${post.node.path}`} key={post.node.wordpress_id}>
           
              <div class="w-full bg-cover bg-top " style={{  
              backgroundImage: `url(${post.node.featured_media.source_url})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                minHeight: "300px"
              }}></div>
              <div class="px-5 py-8">
              <p class="text-xs mb-2 text-gray-600">
               {post.node.date} {post.node.categories.map((category) => 
              <span className="text-xs rounded">/ {category.name} </span>)}
              </p>
            <div class="text-black leading-normal text-lg text-left transition "
              dangerouslySetInnerHTML={{ __html: post.node.title }}/>
              
            </div>
            </Link>

    ))}
 </Carousel>

  </div>
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`asiatojapan`, `application`, `react`]} />
      {header()}
      {services()}
      {news()}
    {topics()}


     

    </Layout>
  )
}
export default IndexPage

export const query = graphql`
  query {
    allWordpressPost(limit: 8,  filter:  {categories: {elemMatch: {name: {nin: "NEWS"}}}}) {
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
    atojLogo: cloudinaryMedia(public_id: {eq: "gallery/Logo_Atoj_buuvod"}) {
      secure_url
    }
    sanpei: cloudinaryMedia(public_id: {eq: "gallery/snp_hjtfvh"}) {
      secure_url
    }
    
    akb: cloudinaryMedia(public_id: {eq: "gallery/akb_ttww5z"}) {
      secure_url
    }
  
    logo: cloudinaryMedia(public_id: {eq: "gallery/companyLogo_kc0kis"}) {
      secure_url
    }
    
  }
`
