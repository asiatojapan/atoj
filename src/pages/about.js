import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"
import PostNews from "../components/postNews.js"



import MapGL, { Marker, Pin, Popup, CityInfo} from 'react-map-gl';



const About = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div class="px-8 md:px-8 hero text-black ">
        <div class="py-10 md:pt-20 md:pb-56">
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


      <section class="px-8 md:px-8 hero text-white bg-governor-bay-500">
       <div class="py-40 mx-auto text-center">
         <div className="text-3xl uppercase tracking-widest"> MISSION </div>
         <div className="text-7xl mb-32 mt-12 font-extrabold"> きっかけから、活躍まで		</div> 
          
         <div className="text-2xl mb-10 leading-relaxed">  
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

      <section class="px-8 md:px-8 hero text-black bg-gray-100">
      <div class="py-40">
      <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          会社名
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
       株式会社ASIA to JAPAN
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          資本金
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
      9,900,000円
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          代表取締役
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
     三瓶 雅人
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          事業内容
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
        人材コンサルティング <br/>
        採用支援事業<br/>
        職業紹介業 (厚生労働大臣許可番号：13-ユ-308436)<br/>
        広告代理業及び広告業​​<br/>
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          取引銀行
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
         みずほ銀行　神田駅前支店​
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
        <div class="text-sm font-semibold mb-5">
          顧問弁護士
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
        寺西 章悟　（田島・寺西法律事務所）
        </div>
        </div>
        </div>

        <div class="flex flex-col container mx-auto px-5 md:flex-row">
        <div class="md:w-5/12 md:text-right">
          <div class="text-sm font-semibold mb-5">
          オフィス所在地
        </div>
        </div
        ><div class="md:w-7/12 md:ml-20">
        <div class="text-sm leading-relaxed mb-5">
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
        </div>
        </div>
        </div>

       
        </div>
        </section>
    </Layout>
  )
}
export default About
