import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import AnchorLink from 'react-anchor-link-smooth-scroll';


function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div className="sticky top-0">
    <nav className="flex flex-wrap items-center justify-between p-6 mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
    <div className="flex items-center text-2xl text-white">
        {/*<div className="w-12 mr-3">
          <LogoIcon />
        </div>*/}
        { siteTitle }
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center px-3 py-2 text-white border border-white rounded hover:text-white hover:border-white"
        >
        { isExpanded ? 
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Close</title>
            <path d="M11.469,10l7.08-7.08c0.406-0.406,0.406-1.064,0-1.469c-0.406-0.406-1.063-0.406-1.469,0L10,8.53l-7.081-7.08
							c-0.406-0.406-1.064-0.406-1.469,0c-0.406,0.406-0.406,1.063,0,1.469L8.531,10L1.45,17.081c-0.406,0.406-0.406,1.064,0,1.469
							c0.203,0.203,0.469,0.304,0.735,0.304c0.266,0,0.531-0.101,0.735-0.304L10,11.469l7.08,7.081c0.203,0.203,0.469,0.304,0.735,0.304
							c0.267,0,0.532-0.101,0.735-0.304c0.406-0.406,0.406-1.064,0-1.469L11.469,10z"></path>
          </svg>
          
          :

          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"></path>
          </svg>

        }

        </button>
      </div>
      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } w-full block flex-grow lg:flex lg:items-center lg:w-auto`}
      >
        <div className="text-sm lg:flex">
        <AnchorLink className="block mt-4 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 hover:text-white" href="#features">
          Features
        </AnchorLink>
        <AnchorLink className="block mt-4 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 hover:text-white" href="#services">
          Services
        </AnchorLink>
        <AnchorLink className="block mt-4 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 hover:text-white" href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="block mt-4 lg:ml-4 mx-4 text-white lg:inline-block lg:mt-0 hover:text-white" href="#testimonials">
          Testimonials
        </AnchorLink>
        </div>
      </div>

    </nav>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `SomthingToWrite`,
}
export default Header
