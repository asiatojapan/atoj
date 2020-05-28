import React, { useState, useEffect } from "react"
import {useStaticQuery, graphql} from 'gatsby'
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OfficeImage from "../components/image.js"

const MoneyForward = ({ data }) => {

  const header = ()=> (
    <div class="px-16 md:px-16 hero text-black">
    <div class="py-10 md:pt-20 md:pb-20">
    <div className="text-md text-governor-bay-500 uppercase" style={{fontFamily: "IBM Plex Sans"}}>
     Case Study #3</div> 
      <div class="text-8xl sm:text-7xl leading-tight tracking-wider mb-20"  style={{fontFamily: "Dosis"}}>
         Money Forward
        </div>  
        </div>  
    </div>  
  )

  const about = ()=> (
    <div class="px-16 md:px-32 hero text-black">
    <div class="py-16 md:pt-20 md:pb-20">
        <div class="grid grid-cols-3 mb-10">
          <div>
            <div className="text-black text-4xl" > Visit</div> <br/>
          <a href="/" className="underline text-governor-bay-500 text-md">moneyforward.com</a></div>
          <div class="col-span-2">
            
          <div class="text-4xl mb-4 text-black leading-snug">会社情報</div> 
          <div className="text-md leading-loose">
          所在地 : <b> 東京都港区</b> <br/>
          社員数 : <b>連結 562 人(2019 年 9 月末時点)</b> <br/>
          事業内容 : <b>インターネットサービス開発 </b>
           </div>
            </div>  
        
        </div>
        </div>  
    </div>  
  )

   const interview = ()=> (
        <section class="px-16 md:px-32 hero text-black">
        <div class="py-16 mx-auto leading-loose">
        <div className="text-md uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>Interview with Money Forward</div> 
          <div className="text-6xl font-bold text-black mb-10">
          ケーススダディ
        </div> 

        <div className="mb-10 text-sm">
        <div className="font-bold text-2xl mb-4">──外国人材の採用に取り組み始めたのはいつ頃ですか。</div>
        <p>
        <b>中出 </b>: 2017 年からです。ベトナムに拠点をもつ会社の取締役と当社の福岡 拠点の責任者に面識があって、ベトナムのハノイ工科大学で日本語と IT を学んでいる学生を採用できる機会があるとご紹介いただいたのがきっか けでした。
        当時はすでに日本でも新卒採用をしていましたので、良い人材 がいたら採用したいと考えて現地へ赴いたところ、優秀な人材が揃っていました。3 人くらい採用できればと思っていましたが、
        想定よりも多く、 5 人を採用しました。ですから、準備万端で外国人材の採用をスタートし たというよりは、たまたまご縁があって採用を開始したというのが流れで す。現在も引き続きハノイ工科大学で採用を行っていて、
        他に現地に拠点 をもっている人材エージェントに依頼し、これまでに韓国、中国、台湾、 ホーチミンで採用を行いました。将来的にはアジアに向けてサービスを展 開していきたいと考えていますので、アジア各国の出身者がいれば少なか らずプラスに働くのではないかと期待しています。
        </p> 
        <p>
        また、アジアの場合は物価の差が優位に働くので、自国で働くよりも高 い給与が得られることが良い人材を採用するうえで 1 つの武器になって います。ベトナムをはじめとしたアジア各国の多くの人にとって、日本で
        働くことは非常に魅力に映るようです。少なくとも初めてハノイ工科大学 の学生を採用したときに、オファーを出した人は全員承諾してくれています。
        外国人材と一緒に働いてまだ 1 年程度ですが、総じて優秀です。日本国内でもエンジニア採用をしていますが、日本の上位大学の学生にオ ファーを出しても断られてしまうこともあるわけで、
        
        同じ地頭の良い上位 大学の学生を採用するのであれば、海外という選択肢をもつことは利点が 大きいと思いました。それに GAFA などのグローバル企業からもオファー が出るような優秀な人を採用しようと思ったときに、日本だけで採用する のは厳しいとも思います。
        </p>
        </div>

        <div className="mb-10 text-sm">
        <div className="font-bold text-2xl mb-4"> ──採用しているのは IT エンジニアのみですか。</div>

        <p>
        <b>中出 </b>: 
        そうですね。現在は従業員約 600 人中、外国人社員は 10 人くらいで、海外から採用した人は全員エンジニアです。ビジネスサイドの人とも 面接をしたことはあるのですが、日本語力が日本語能力検定の N1 程度は ないと厳しい印象でした。一方でエンジニアの場合、情報収集は英語です し、プログラミングコードも日本語は関係ないですから、言葉のハンディ キャップが小さいのです。
        </p>
        
        <p>
        それにエンジニアとひとことでいっても、コミュニケーションが重視さ れるポジションとテクニカルな部分が重視されるポジションで大きく分け られます。たとえば会計の業務知識をもったメンバーとコミュニケーショ ンをとりながら進める仕事は日本語力や日本の事情を知っている必要があ りますが、インフラに近い部分はあまり言語差がありません。ユーザーが 増えて扱うデータも増えている中で、レスポンスのスピードを保つことも 重要ですから、そのような部分は外国人材の方に活躍してもらいやすいと 思っています。とはいえ、日本語で働いてもらうことが前提ではあるの で、基本的には最低でも N3 程度の日本語力は求めています。
        </p>
       
        </div>
        
       
      </div>
   </section>
  )

  const clients = () => (
    <section class="px-16 md:px-32 hero ">
    <div class="py-16 mx-auto">
    <div className="text-md pb-10 uppercase text-governor-bay-500" style={{fontFamily: "IBM Plex Sans"}}>More Case Studies</div> 


        <div class="grid grid-cols-2 text-3xl gap-10">
        <div className="pb-10 border-b border-black"> 
        <a href="/jr-east" class="hover:text-gray-600" > 東日本旅客鉄道株式会社 </a></div>
        <div className="pb-10 border-b border-black"> 
        <a href="/money-forward" disabled class="text-governor-bay-500"> マネーフォワード </a></div> 
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
export default MoneyForward
