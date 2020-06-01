import React, { useState, useEffect } from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"

const JrEast = ({ data }) => {

  const header = ()=> (
    <div class="px-16 md:px-32 hero ">
    <div class="py-10 md:pt-20 md:pb-20">
    <div className="text-md text-governor-bay-500 uppercase" style={{fontFamily: "IBM Plex Sans"}}>
     Case Study #1</div> 
      <div class="text-8xl sm:text-7xl leading-tight tracking-wider mb-20"  style={{fontFamily: "Dosis"}}>
      東日本旅客鉄道株式会社
        </div>  
        </div>  
    </div>  
  )

  const about = ()=> (
    <div class="px-16 md:px-32 hero ">
    <div class="py-16 md:pt-20 md:pb-20">
        <div class="grid grid-cols-3 mb-10">
          <div>
            <div className="text-black text-4xl"> Visit</div> <br/>
          <a href="/" className="underline text-governor-bay-500 text-md">jr-east.com</a></div>
          <div class="col-span-2">
            
          <div class="text-4xl mb-4 text-black leading-snug">会社情報</div> 
          <div className="text-md leading-loose">

          所在地 : <b> 東京都渋谷区</b> <br/>
          社員数 : <b>5万3200人(2019年4月1日現在)</b> <br/>
          事業内容 : <b>旅客鉄道事業ほか </b>
           </div>
            </div>  
        
        </div>
        </div>  
    </div>  
  )

   const interview = ()=> (
        <section class="px-16 md:px-32 hero ">
        <div class="py-16 mx-auto leading-loose">
        <div className="text-md uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>Interview with JR East</div> 
          <div className="text-6xl font-bold text-black mb-10">
          ケーススダディ
        </div> 

        <div className="mb-10 text-sm">
        <div className="font-bold text-2xl">──外国人材の採用に取り組み始めたのはいつ頃ですか。</div>
        <p>
        2012 年からです。当初は若干名の採用でしたが、国際事業の進展など に伴い、2014 年から採用人数を増やし始めました。新卒採用・中途採用 の双方を合わせて、年間 10 名程度を採用しています。現状はアジアの方 が多いですが、今後は事業を展開していく国の方の採用を強化することも 検討しています。
        </p>
        </div>

        <div className="mb-10 text-sm">
        <div className="font-bold text-2xl"> ──日本人と外国人材の採用には、どのような違いがありますか。</div>
        <p>
        2 つあります。1 つ目は採用候補者との接点のもち方です。これは外国 人の方に限らず日本人にもいえることですが、当社は「さまざまな地域か ら多様な人材を受け入れる」ことを採用方針にしています。ただ現状、日 本で出会える外国人材は留学生が主体で、国籍もアジアの方が多く地域が 限られてしまいますし、大学の偏りも生じてしまいます。幅広くグローバ ルな人材を採用していきたいという観点で考えると、今までの採用チャネ ルだけでは限界があると感じています。
        </p>

        <p>
        そこで海外在住の外国人材と接点をもつべく、近年は海外で開催される キャリアイベントや、ASIA to JAPAN の「Study Go Work JAPAN 面 接会」などにも積極的に参加しています。海外では JR 東日本が海外事業 を展開していることを知らない方も多いですから、まずは当社に関心をも つ機会をもつよう、努力をしています。
      </p>

      <p>2 つ目は、職種への理解です。当社には総合職と、東日本の各エリアを 軸にしたビジネスフィールドで活躍するエリア職があるのですが、海外で は「学生時代に培った専門性を活かしたい」と希望する方が多いのです。 総合職の場合は専門性だけでなく、幹部候補生としてマネジメント力や経 営目線も求められますから、求める人材像を理解していただくことに難し さを感じています。</p>
        </div>


        <div className="mb-10 text-sm">
        <div className="font-bold text-2xl">──総合職という日本特有の職種への理解が得られにくいというのは、各社 が悩んでいるところだと思います。説明をするうえで、工夫していること はありますか。</div>
        <p>
        総合職は「将来経営を担う人材」として期待されていることを、丁寧に 説明することに尽きると思います。特に当社の鉄道事業は、お客さまの命 を預かる仕事です。その厳しさを認識したうえで、自分がやりたい仕事を するために、どのような経験を積まなければいけないのかを理解していた だく必要があります。技術を磨き上げることにとどまらず、会社の経営全 般に関心をもち、チームをリードできる人材として成長してほしいと思っ ています。そのためにも、さまざまな部署を経験し、ステップアップして ほしいのです。そのキャリアパスは日本人と同様に考えています。
        </p>

        <p>
        ただ一方では、日本人と同様のキャリアパスを用意することに違和感を もっている外国人の社員も出てきています。技術や能力を身に付けたうえ でマネジメント力を発揮してもらいたいという思いに変わりはありません が、そこに日本人とは違うバックグラウンドをもっている外国人材ならで はの経験や視点をどのように組み合わせていくのか。この点は今後の課題 です。ただし、外国人材向けにしくみを考えるというよりは、各社員の目 標や「JR 東日本の社員としてどうなりたいか」を加味しながら検討する ことになると思っています。
        </p>
        </div>
        
       
      </div>
   </section>
  )

  const clients = () => (
    <section class="px-16 md:px-32 hero ">
    <div class="py-16 mx-auto">
    <div className="text-md pb-10 uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>More Case Studies</div> 


        <div class="grid grid-cols-2 text-3xl gap-10 tracking-tight">
        <div className="pb-10 border-b border-black"> 
        <a href="/jr-east"  disabled class="text-governor-bay-500"> 東日本旅客鉄道株式会社 </a></div>
        <div className="pb-10 border-b border-black"> 
        <a href="/money-forward" class="hover:text-gray-600"> マネーフォワード </a></div> 
        </div>
        <div class="grid grid-cols-2 text-3xl gap-10">
        <div className="py-10 border-b border-black"> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div>
        <div className="py-10 border-b border-black"> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div> 
        </div>

        <div class="grid grid-cols-2 text-3xl gap-10">
        <div className="py-10 border-b border-black"> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div>
        <div className="py-10 border-b border-black"> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div> 
        </div>

        <div class="grid grid-cols-2 text-3xl gap-10">
        <div className="py-10 "> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div>
        <div className="py-10"> 
        <a href="/money-forward" class="hover:text-gray-600"> Money Forward </a></div> 
        </div>
        </div>
     </section>
  )

  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        {header()}
        <OfficeImage/>
        {about()}
        <hr/>
        {interview()}
        {clients()}
      </Layout>
  )
}
export default JrEast
