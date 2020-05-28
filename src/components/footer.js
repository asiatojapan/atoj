import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Footer = ({ siteTitle }) => {

return(
  <footer >
      <div class="bg-gray-100 px-32 hero text-black ">
          <div class="py-16">
          <div class="grid grid-cols-2 gap-32"> 
          <div>
          <div class="text-black text-4xl mt-4">Want to talk?</div>
          <div class="text-black text-2xl mt-4 block select-none mb-20">info@asiatojapan.com</div>
         

           <div className="grid grid-cols-2 gap-32">
             <div>
      
              <div class="text-black text-sm font-semibold uppercase mb-4">本社　</div> 
              <div class="text-black text-xs">
                  〒103-006 <br/> 
                  東京都中央区日本橋富沢町10-13  <br/>
                  & WORK NIHONBASHI 7F <br/> 
                  03-5579-2139　+813-5579-2139  
                </div>
              </div> 
              <div>
             <div class="text-black text-sm font-semibold uppercase mb-4">大阪オフィス　</div> 
             <div class="text-black text-xs">
                    〒541-0053 <br/> 
                  大阪府大阪市中央区本町4-2-12  <br/>
                  東芝大阪ビル 8F <br/>
                    06-6556-6402
                    </div>
                </div>
            </div>
            </div>
            <div>
                <ul class="mt-4 text-4xl block select-none">
                <li className="pb-10 border-b border-gray-400">
                  <span className="text-sm font-governor-blue-500 mr-5"> 01 </span>
                  <a href="/about" class="text-black hover:text-gray-600">会社概要</a></li>

                <li className="py-10 border-b  border-gray-400">
                <span className="text-sm font-governor-blue-500 mr-5"> 02 </span>
                <a href="/service" class="text-black hover:text-gray-600">サービス</a></li>

                <li className="py-10 border-b border-gray-400">
                <span className="text-sm font-governor-blue-500 mr-5"> 03 </span>
                <a href="http://success.asiatojapan.com" class="text-black hover:text-gray-600">成功事例</a></li>

                <li className="py-10 border-b border-gray-400">
                <span className="text-sm font-governor-blue-500 mr-5"> 04 </span>
                <a href="https://fshost.me/help/rcon" class="text-black hover:text-gray-600">採用情報 </a></li> 

                <li className="py-10">
                <span className="text-sm font-governor-blue-500 mr-5"> 05 </span>
                <a href="https://fshost.me/help/faq" class="text-black hover:text-gray-600">アクセス</a></li> </ul>
               
              </div>
            </div>
         </div>  
        </div>

        <div className="px-16 hero bg-governor-bay-500">
            <div class="flex justify-between items-center py-12">
              <div class="flex items-center">
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
