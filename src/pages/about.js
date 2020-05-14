import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import SanpeiImage from "../components/images/SanpeiImg.js"

import AkbImage from "../components/images/AkbImg.js"
import PostNews from "../components/postNews.js"



const About = ({ data }) => {

  const header = ()=> (
    <div class="px-8 md:px-8 hero text-black ">
    <div class="py-10 md:pt-20 md:pb-20">
      <div class="text-8xl sm:text-7xl leading-tight tracking-wider mb-20"  style={{fontFamily: "Dosis"}}>
         ASIA to JAPAN
         <br/>
         の活動
        </div>  
   
        <div class="grid grid-cols-3 gap-10">
    
        <div>
         <div class="font-semibold text-5xl mb-4">01 </div> 
          <div className="text-2xl leading-tight">
          アジア太平洋地区３９大学を対象にした日本就職・採用の支援</div>
        </div>
        
        <div>
           <div class="font-semibold text-5xl mb-4">02 </div> 
            <div className="text-2xl leading-tight">
             海外主要１８大学の大学内で展開する理系学生向け日本語授業
            </div>
        </div>

        <div>
          <div class="font-semibold text-5xl mb-4">03</div> 
          <div className="text-2xl leading-tight">
            外国人内定者向け日本語学習・来日定着のサポート
          </div>
        </div>
      </div>
    </div>
  </div>

  )

  const vision = () => (
    <section class="px-8 md:px-8 hero text-white bg-governor-bay-500">
    <div class="py-16 mx-auto text-center">
      <div className="text-3xl uppercase tracking-widest"> MISSION </div>
      <div className="text-7xl  font-extrabold leading-loose"> きっかけから、活躍まで		</div> 
       
      <div className="text-2xl leading-relaxed">  
      "世界で活躍したいと想う海外の若者にとって <br/>
       就業環境の整う日本は魅力的な存在に成り得ます。 <br/>
       その一方で言語や慣習の違いから生じるギャップが <br/>
       ポテンシャルある学生のチャンスを阻害している実態があります。 <br/>
       ASIA to JAPANは <br/>
       海外の主要大学と提携した大学内での日本語学習などを通じ <br/>
       学生へ日本就職のきっかけを提供します。 <br/>
       あわせて就職決定後に必要なサポートを次々と充実させていくことで <br/>
       ギャップを解消し活躍まで支援します。 <br/>
       外国人の雇用に必要な情報や機会、安心を世の中に提供することで <br/>
       外国人採用を行う企業を増やします"		 <br/>
     </div>
     </div>
   </section>
  )

  const companyDetails = () => (
    <section class="px-8 md:px-8 hero text-black">
      <div class="py-16">
      <div class="grid grid-cols-3 gap-32"> 
      <div>
      <div className="text-6xl py-10 font-bold text-black">会社概要</div> 
      </div>
      <div className="col-span-2">
      <dl class="my-4 list-inside">
						<dt className="float-left w-40">会社名</dt>
            <dd className="ml-40">株式会社ASIA to JAPAN</dd>
						<dt className="float-left w-40">資本金</dt><dd>9,900,000円</dd>
						<dt className="float-left w-40">代表取締役</dt><dd>三瓶 雅人</dd>
						<dt className="float-left w-40">事業内容</dt>
            <dd className="ml-40">人材コンサルティング <br/>
                採用支援事業<br/>
                職業紹介業 (厚生労働大臣許可番号：13-ユ-308436)<br/>
                広告代理業及び広告業​​<br/></dd>
            
            <dt className="float-left w-40">取引銀行</dt>
            <dd className="ml-40">みずほ銀行　神田駅前支店​</dd>
            <dt className="float-left w-40">顧問弁護士</dt>
            <dd className="ml-40">寺西 章悟　（田島・寺西法律事務所）</dd>
            <dt className="float-left w-40">オフィス所在地</dt>
            <dd className="ml-40">
                  <b> 本社　</b> 
                  <br/> 
                    〒103-006 東京都中央区日本橋富沢町10-13  <br/>
                    & WORK NIHONBASHI 7F <br/> 
                      03-5579-2139　+813-5579-2139 
                    <br/><br/> 

                    <b>大阪オフィス　</b> <br/>
                    〒541-0053 大阪府大阪市中央区本町4-2-12  <br/>
                    東芝大阪ビル 8F <br/>
                  06-6556-6402
            </dd>
					</dl>
          </div>
          </div>
          </div>

     
      </section>
  )

  const members = () => (
    <section class="px-8 md:px-8 hero text-black bg-white">
      <div class="py-20 container mx-auto">
      <div className="text-6xl py-10 mb-10 text-center font-bold text-black">役員紹介</div> 
          <div class="grid grid-cols-2 gap-16"> 
            <div>
              <div className="mb-10" style={{width: "500px", height:"500px"}}> 
              <Img fluid={data.sanpei.childImageSharp.fluid} style={{width: "500px", height:"500px"}}/>
                </div>
              <div className="text-4xl mb-5 font-semibold">三瓶 雅人 </div>
              <div className="text-2xl mb-5 text-governor-bay-500">代表取締役社長</div>
              <div className="text-gray-900">
              1997年、株式会社キャリアデザインセンター入社。キャリア採用広告営業、営業マネージャ・営業部長、マーケティング部長、人材紹介部門の事業責任者となる。
              <br/>  <br/>
              2006年、株式会社日経ＨＲ入社。人材紹介事業立ち上げ、転職サイト責任者、システム責任者を経て、2012年よりアジア現地学生採用のための新規事業を立ち上げ、その責任者となる。
              アジア９カ国、トップ５０大学と連携した事業はテレビ「ガイアの夜明け」でも取り上げられる。2017年2月に株式会社ASIA to JAPANを創業。
              </div>
            </div>

            <div>
            <div className="mb-10" style={{width: "500px", height:"500px"}}>
            <Img fluid={data.akb.childImageSharp.fluid} style={{width: "500px", height:"500px"}}/>
            </div>
              <div className="text-4xl mb-5 font-semibold">赤羽根 大輔</div>
              <div className="text-2xl mb-5 text-governor-bay-500">取締役副社長</div>
              <div className="text-gray-900">
              1999年、株式会社キャリアデザインセンター入社。キャリア採用広告営業、営業マネージャ・営業部長、雑誌「ｔｙｐｅ」編集長を経て、国内新卒事業立ち上げ責任者に。
              <br/> <br/>2007年、雑誌「就活type」「就活typeプレミアムイベント」を立上げ、就職市場にハイエンド就職サービスを定着させる。
              <br/> <br/>2013年、株式会社日経ＨＲ入社。三瓶と共にアジア現地学生採用の事業立ち上げに従事。
              <br/> <br/>2017年2月に株式会社ASIA to JAPANを創業。これまで１００社を超える外国人学生採用を支援。
              </div>
            </div>
        </div>
      </div>
    </section>
    )

    const location = () => (
      <>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.481697005647!2d139.78039301519735!3d35.68976218019236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d01e080d06f%3A0x47982cfbf7204c28!2z5qCq5byP5Lya56S-QVNJQSB0byBKQVBBTg!5e0!3m2!1sja!2sjp!4v1589375295596!5m2!1sja!2sjp" style={{width: "100%", height: "500px"}}></iframe>
   
      <section class="mx-auto py-10 md:py-20 px-4">
            <p className="text-6xl font-bold text-center mb-16 text-black"> 本社 / 面接会場 </p> 
            <div className="flex px-48">
                <div class="w-full md:w-1/2 ">
          〒103-0006 <br/>東京都中央区日本橋富沢町10-13 
          <br/>& WORK NIHONBASHI 7F <br/>
          03-5579-2139
          </div>
          <div class="w-full md:w-1/2 ">
          <b>アクセス </b><br/>
          東京メトロ日比谷線・都営浅草線「人形町駅」6分 <br/>
          東京メトロ日比谷線 「小伝馬町駅」6分 <br/>
          都営新宿線「馬喰横山駅」5分 <br/>
          都営浅草線 「東日本橋駅」5分 <br/>
          ＪＲ総武快速線「馬喰町駅」7分 <br/>
          東京駅八重洲口よりタクシーで10分 </div>
            </div>
        
           </section>
           </>
    )
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
     
      {header()}
        {vision()}
       {companyDetails()}
       {members()}
     
      {location()}
      </Layout>
  )
}
export default About

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