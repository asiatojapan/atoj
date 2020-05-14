import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import SchoolsMap from "../components/schoolsMap"


const Service = ({ data }) => {

  const header = ()=> (
    <div class="px-8 md:px-8 hero">
    <div class="py-10 md:pt-20 md:pb-20">
      <div class="text-8xl sm:text-7xl mb-10 leading-tight">
      Study Go Work JAPAN
         <br/>
         の特徴
        </div>  
        </div>
  </div>
  )

  const merits = ()=> (
    <section>
        <div class="grid grid-cols-2">
        <div>
          <div className="bg-gray-900 container mx-auto text-center pt-16 pb-32 h-full text-white leading-tight">
             写真は「内定もらって企業と一緒に写ってる写真」
          </div>
       </div>

        
        <div className="w-full px-4 p-6 md:p-12 lg:p-20 lg:py-24 leading-snug ">
           <div class="font-semibold text-5xl mb-4">海外トップクラスの学生を無料で日本で面接 </div> 
            <div className="text-xl leading-tight">
            参加無料で毎月開催しています。海外トップクラスの大学の学生や卒業生と日本で面接することができます。
            海外に行く手間やコストを削減でき、必要な時期に短期間で採用を決着させることができます。
            複数の国や地域の学生を日本に居ながらにして一気に選考することができます。オンラインでの選考も可能です。	
            </div>
        </div>

        <div>
          <div className="bg-gray-900  container mx-auto text-center pt-16 pb-32 h-full text-white leading-tight">
          写真は「Darwinのサムネイル画像」
          </div>
       </div>

        
        <div className="w-full px-4 p-6 md:p-12 lg:p-20 lg:py-24 leading-snug ">
           <div class="font-semibold text-5xl mb-4">学生の情報はWebサイトで確認・管理</div> 
            <div className="text-xl leading-tight">
            利用企業は専用のWebサイトで面接したい学生を選びます。
            サイトでは「学生の基本情報」のほか、「研究やプロジェクトのレポート」
            「メッセージビデオ」を確認できます。面接したい学生の選出、面接スケジュールの確認、
            面接結果の報告など全てをサイト内で完結することができます。	
            </div>
        </div>


        <div>
          <div className="bg-gray-900  container mx-auto text-center pt-16 pb-32 h-full text-white leading-tight">
          写真は「日本語を勉強している画像」
          </div>
       </div>

        
        <div className="w-full px-4 p-6 md:p-12 lg:p-20 lg:py-24 leading-snug ">
           <div class="font-semibold text-5xl mb-4">入社前の日本語ブラッシュアップ・受入れも支援</div> 
            <div className="text-xl leading-tight">
            採用決定後のオプションサービスとして、現地での日本語授業や日本語とビジネスマナーを学べる合宿を準備しています。就労ビザの取得や入社時の呼び寄せの手配などは、ASIA to JAPANと提携する専門機関にお任せいただくことができます。		
            </div>
        </div>

        
      </div>
    <div class="px-8 md:px-8 hero border text-center">
    <div class="py-10 md:pt-20 md:pb-20">
     <div className="text-3xl text-black font-semibold mb-10"> 海外トップクラスの学生リストを見てみたい方
     </div>
      <a href="/" className="hover:text-governor-bay-400 transition duration-200 ease-in text-governor-bay-500 text-3xl underline">こちら</a>	
      </div>	

      </div>	
  </section>

  )

  const process = () => (
    <section>
      <div class="px-8 md:px-8 hero">
         <div class="py-10 md:pt-20 md:pb-20">
         <div className="text-sm text-governor-bay-500 py-10 mb-2 text-black uppercase" style={{fontFamily: "IBM Plex Sans"}}>How we manage our Student's Database</div> 
             <div className="text-6xl pb-10 mb-10 font-bold text-black">学生獲得の取り組み</div> 
               <div class="grid grid-cols-4 gap-16 text-3xl leading-snug">
               <div>
               理系学生向け日本語授業の展開
               </div>

               <div>
               日本就職のための学内説明会の開催
               </div>

               <div>
               大学主催の就職フェアへ参加
               </div>

               <div>
               Webマーケティング
               </div>

               </div>

        </div>
      </div>
    </section>
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
     
        {header()}
        {merits()}
        {process()}
      </Layout>
  )
}

export default Service

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 3000, quality: 100){
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
  }
}
`;

export const pageQuery = graphql`
  query {
   sanpei: file(relativePath: { eq: "snp.png" }) {
      ...fluidImage
    }
    akb: file(relativePath: { eq: "akb.png" }) {
      ...fluidImage
    }
  }
`