import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"

const Header = ({ siteTitle }) => {


  const [isExpanded, toggleExpansion] = useState(false)
return(
  <nav class="flex items-center justify-between flex-wrap bg-white p-4 sticky top-0 z-50">
  <div class="flex items-center flex-shrink-0 text-black mr-6">
   <Link
          to="/"
          className="text-xl tracking-wider" style={{fontFamily: "Dosis"}}
        >
          {siteTitle}
        </Link>
  </div>
  <div class="block lg:hidden">
    <button onClick={() => toggleExpansion(!isExpanded)} class="flex items-center px-3 py-2 border rounded border-governor-bay-400 hover:text-governor-bay-400 hover:border-governor-bay-300">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div className={`${ isExpanded ? `block` : `hidden` } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}>
    <div class="text-xs lg:flex-grow">
      <a href="/about" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400 mr-4">
       会社概要
      </a>
      <a href="/service" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400 mr-4">
      サービス
      </a>
      <a href="/success-stories" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400 mr-4">
      成功事例     
        </a>
        <a href="/careers" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400 mr-4">
        採用情報
        </a>
        <a href="https://studygoworkjapan.com" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400mr-4">
        学生の方へ
        </a>
        <a href="https://studygoworkjapan.com" class="block mt-4 lg:inline-block lg:mt-0 text-governor-bay-500 hover:text-governor-bay-400 mr-4">
        ユーザーサイト
        </a>
     
    </div>
    <div>
      <a href="#" class="inline-block text-xs px-4 py-2 leading-none py-3 transition duration-200 ease-in text-white rounded bg-governor-bay-500 hover:bg-governor-bay-400 mt-4 lg:mt-0">
      問合せ
      </a>
    </div>
  </div>
</nav>
)
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
