import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Footer = ({ siteTitle }) => {

return(
  <footer class="bg-governor-bay-500">
  <div class="border-b border-gray-500">
    <div class="container mx-auto py-10 md:py-20 px-4">
      <div class="flex flex-wrap justify-between">
        <div class="w-full md:w-2/5 max-w-sm">
          <div class="text-white text-4xl mt-4">Want to talk?</div>
           <div class="text-gray-100 text-2xl mt-4 block select-none">info@asiatojapan.com</div>
           </div> 
          <div class="w-full md:w-3/5 mt-10 md:mt-0 md:pl-8">
            <div class="flex">
              <div class="w-1/2">
                <div class="text-white text-sm font-semibold uppercase mb-4">本社　</div> 
                
                  <div class="text-gray-100 text-xs">
         
                  〒103-006 <br/> 
                  東京都中央区日本橋富沢町10-13  <br/>
                  & WORK NIHONBASHI 7F <br/> 
                  03-5579-2139　+813-5579-2139 
                  <br/><br/>

          <div class="text-white text-sm font-semibold uppercase mb-4">大阪オフィス　</div> 
          〒541-0053 <br/> 
          大阪府大阪市中央区本町4-2-12  <br/>
          東芝大阪ビル 8F <br/>
           06-6556-6402</div>
               </div> 
               
              

              <div class="w-1/2">
                <div class="text-white text-sm font-semibold uppercase mb-4">Links</div> 
                <ul class="text-xs">
                  
                <li><a href="https://fshost.me/contact" class="text-gray-100 hover:text-white">会社概要</a></li>
                <li><a href="https://fshost.me/contact" class="text-gray-100 hover:text-white">Study Go Work JAPAN</a></li>
                <li><a href="https://fshost.me/contact" class="text-gray-100 hover:text-white">採用情報</a></li>
                <li><a href="https://fshost.me/help/rcon" class="text-gray-100 hover:text-white">資料請求・お問合せ</a></li> 
                <li><a href="https://fshost.me/help/faq" class="text-gray-100 hover:text-white">アクセス</a></li> </ul>
               </div></div></div></div></div></div> 
               <div class="container mx-auto px-4">
                 <div class="flex justify-between items-center py-12"><div class="flex items-center">
                   <div class="flex-1">
                     </div> 
                     <div class="max-w-xs ml-4">
                     <span class="text-white text-sm">© {new Date().getFullYear()} ASIA to JAPAN</span>
                     </div></div>
                      <div class="flex text-3xl">
                       <div class="mx-1"><a href="https://twitter.com/fshostme" target="_blank" class="text-gray-500 hover:text-white">
                        Facebook</a>
                        </div> 
                      </div>
                    </div>
                 </div>
             </footer>
  )
}

export default Footer
