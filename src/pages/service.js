import React, { useState, useEffect } from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"


const Service = ({ data }) => {

  const header = ()=> (
    <div class="px-16 md:px-16 hero text-black">
    <div class="py-10 md:pt-20 md:pb-20">
    <div className="text-md text-governor-bay-500 uppercase" style={{fontFamily: "IBM Plex Sans"}}>
      What is Study Go Work JAPAN?</div> 
      <div class="text-8xl sm:text-7xl leading-tight tracking-wider mb-10"  style={{fontFamily: "Dosis"}}>
      Study Go Work JAPANとは
        </div>  
        </div>  
    </div>  
  )

  const merits = ()=> (

      <section class="px-16 md:px-32 hero">
        <div class="py-16 mx-auto">
        <div class="grid grid-cols-3 ">
        <div>
        <div className="text-md pb-10 uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>What makes us different?</div> 
          <div className="text-6xl font-bold text-black mb-10">
          特徴
        </div> 
        </div>
        
        <div className="col-span-2">
              <div className="text-xl py-6 leading-tight text-black"> 
                01 海外トップクラスの学生を無料で日本で面接 
              </div>
              <div className="text-xl py-6 leading-tight text-black"> 
              02 学生の情報はWebサイトで確認・管理
                </div>
              <div className="text-xl py-6 leading-tight text-black">  
                03 入社前の日本語ブラッシュアップ・受入れも支援
              </div>
          </div>
        </div>
         
        </div>
        
        <hr/>

        <div className="py-16">
        <div class="grid grid-cols-3 mb-10">
          <div className="text-4xl font-semibold text-black ">01 </div>
          <div class="col-span-2">
            
           <div class="font-semibold text-4xl mb-4 text-black leading-snug">海外トップクラスの学生を無料で日本で面接 </div> 
           <div className="text-md leading-loose">
            参加無料で毎月開催しています。海外トップクラスの大学の学生や卒業生と日本で面接することができます。
            海外に行く手間やコストを削減でき、必要な時期に短期間で採用を決着させることができます。
            複数の国や地域の学生を日本に居ながらにして一気に選考することができます。オンラインでの選考も可能です。	
            </div>
         </div>  
         
          </div>
        <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height: "400px", width: "100%"}} className="object-cover" />
        </div>

        <hr/>

          <div className="py-16">
          <div class="grid grid-cols-3 mb-10">
            <div className="text-4xl font-semibold text-black ">02</div>
            <div class="col-span-2">
              
            <div class="font-semibold text-4xl mb-4 text-black leading-snug">学生の情報はWebサイトで確認・管理</div> 
            <div className="text-md leading-loose">
            利用企業は専用のWebサイトで面接したい学生を選びます。
            サイトでは「学生の基本情報」のほか、「研究やプロジェクトのレポート」
            「メッセージビデオ」を確認できます。面接したい学生の選出、面接スケジュールの確認、
            面接結果の報告など全てをサイト内で完結することができます。	
              </div>
          </div>  
          
            </div>
          <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height: "400px", width: "100%"}} className="object-cover" />
          </div>

          <hr/>

        <div className="py-16">
        <div class="grid grid-cols-3 mb-10">
          <div className="text-4xl font-semibold text-black ">03 </div>
          <div class="col-span-2">
            
          <div class="font-semibold text-4xl mb-4 text-black leading-snug">入社前の日本語ブラッシュアップ・受入れも支援 </div> 
          <div className="text-md leading-loose mb-20">
          採用決定後のオプションサービスとして、現地での日本語授業や日本語とビジネスマナーを学べる合宿を準備しています。就労ビザの取得や入社時の呼び寄せの手配などは、ASIA to JAPANと提携する専門機関にお任せいただくことができます。		
           </div>

           <a href="/" className="mt-24 hover:text-governor-bay-400 transition duration-200 ease-in text-governor-bay-500 text-xl underline">
           リストを見てみたい方はこちら
            </a> 
            </div>  
        
          </div>
        </div><hr/>
      </section>
      

  )

  const process = () => (
    <section class="px-16 md:px-32 hero">
    <div class="py-16 mx-auto">
   
        <div class="grid grid-cols-2 text-3xl py-20 gap-10">
          
          <div className="pb-10"> 
          <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height:"300px", width: "100%"}} className="object-cover" />
          理系学生向け日本語授業の展開</div>
          <div className="pb-10"> 
          <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height:"300px", width: "100%"}} className="object-cover" />
          日本就職のための学内説明会の開催</div> 
        </div>

        <div class="grid grid-cols-2 text-3xl gap-10">
        <div className="pb-10"> 
        <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height:"300px", width: "100%"}} className="object-cover" />
        大学主催の就職フェアへ参加</div>
        <div className="pb-10"> 
        <img src={data.sanpei.secure_url} alt={"Sanpei"} style={{height:"300px", width: "100%"}} className="object-cover" />
        Webマーケティング</div> 
        </div>

    </div>
    </section>
  )

  const clients = () => (
    <section class="px-16 md:px-32 hero text-black">
    <div class="py-16 mx-auto">
   
        <div class="grid grid-cols-3 text-lg gap-16">
          <div>Select Clients <br/>
          利用企業例
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">東日本旅客鉄道株式会社 </div>
           <div className="text-sm pb-6">人財戦略部人財育成ユニットマネージャーの尾上さやか氏にお話をうかがった。</div >

           <a href="/jr-east" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">シスメックス株式会社</div>
           <div className="text-sm pb-6">人事部人事課イアン・ロジャース氏、井谷苗未氏にお話をうかがった。</div>

           <a href="/sysmex" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">株式会社マネーフォワード</div>
           <div className="text-sm pb-6">取締役執行役員 CTO 中出匠哉氏、人事井上玲氏にお話をうかがった。</div >

           <a href="/money-forward" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">株式会社テイエルブイ</div>
           <div className="text-sm pb-6">取締役副社長藤原綾子氏、ジェネラルマネージャー CES センター見田哲 也氏にお話をうかがった。</div >

           <a href="/tlv" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">株式会社テクノスジャパン</div>
           <div className="text-sm pb-6">代表取締役社長吉岡隆氏にお話をうかがった。</div >

           <a href="/tecnos-japan" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">株式会社モリタアンドカンパニー</div>
           <div className="text-sm pb-6">取締役技術部・製造部管掌谷口昌也氏、管理部山本祐司氏にお話をうか がった。</div >

           <a href="/morita-and-company" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

          <div className="pb-10">
           <div className="text-xl font-semibold pb-2">YKK株式会社</div>
           <div className="text-sm pb-6">人事部ファスニング人事グループ黒部人材開発チームの名津井翔汰氏と家 令百合果氏にお話をうかがった。</div >

           <a href="/ykk" class="text-governor-bay-500 text-sm hover:text-gray-600"> View Case Study </a>
      
          </div>

         
        </div>
        </div>
     </section>
  )


  const userVoice = () => (
    <section class="px-16 md:px-32 hero">
    <div class="py-16 mx-auto">
  
        <div className="text-md pb-10 uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>What do our clients say?</div> 
        <div className="text-6xl font-bold text-black mb-10">
          人事の声
        </div> 
        <div className="text-2xl pb-10">
        参加して理由と感想についてお話を伺いました
        </div>
        </div>


        <div class="grid grid-cols-2 gap-10">
          <div className="align-middle">
            <div className="text-3xl font-bold">花王株式会社</div>
            <div className="py-6">初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！
            </div>
          </div>
        <div><img src={data.sanpei.secure_url} style={{height:"300px", width: "100%"}}  alt={"logo"} /></div>
        </div>

        <div class="grid grid-cols-2 gap-10">
          <div className="align-middle">
            <div className="text-3xl font-bold">花王株式会社</div>
            <div className="py-6">初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！
            </div>
          </div>
        <div><img src={data.sanpei.secure_url} alt={"logo"} style={{height:"300px", width: "100%"}} className="object-cover" /></div>
        </div>

        <div class="grid grid-cols-2 gap-10">
          <div className="align-middle">
            <div className="text-3xl font-bold">花王株式会社</div>
            <div className="py-6">初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！初期参加費用が無料！
            </div>
          </div>
        <div><img src={data.sanpei.secure_url} alt={"logo"} style={{height:"300px", width: "100%"}} className="object-cover" /></div>
        </div>
     </section>
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
     
        {header()}
        <OfficeImage/>
        {merits()}
        {process()}
        <hr/>
        {clients()}
        {userVoice()}
      </Layout>
  )
}

export default Service

export const data = graphql`
  query AboutQuery {
    sanpei: cloudinaryMedia(public_id: {eq: "gallery/snp_hjtfvh"}) {
      secure_url
    }
    
    akb: cloudinaryMedia(public_id: {eq: "gallery/akb_ttww5z"}) {
      secure_url
    }

    logo: cloudinaryMedia(public_id: {eq: "gallery/companyLogo_kc0kis"}) {
      secure_url
    }
}`