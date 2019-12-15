import React from "react"
import { useState, useEffect } from 'react';
import './TopAnime.scss'

const TopAnime = ({ mounted }) => {
  const [started, setStarted] = useState(false)
  useEffect(() => {
    setStarted(true)
  }, [])
  return (
    <div id="top-anime" className={`${mounted ? "-hidden" : ""} ${started ? "-started" : ""}`}>
      <div className="main-logo">
        <div className="icon-m">
          <svg className="text" width="100%" height="100%" viewBox="0 0 220 210" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path d="M23.0606 55.5013C12.4183 44.6656 12.4183 27.0974 23.0605 16.2617C33.7028 5.42595 50.9573 5.42595 61.5995 16.2617L143.83 99.9875L105.291 139.227L23.0606 55.5013Z" fill="#FFABB5" />
              <rect width="55" height="140" transform="matrix(0.700708 0.713448 -0.700708 0.713448 165.384 0)" fill="#FFABB5" />
              <rect x="165" width="55" height="210" fill="#FFABB5" />
              <rect y="60.2" width="55" height="150" fill="#FFABB5" />
              <rect x="206.25" width="12.75" height="210" fill="#D2A3A3" />
            </g>
            <defs>
            </defs>
          </svg>
        </div>
        <div className="icon-o">
          <div className="icon-bar">
            <svg className="bar" width="100%" height="100%" viewBox="0 0 100 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <rect x="-0.0924683" y="0.348846" width="100" height="30" fill="#FFABB5" />
                <rect x="-0.0924683" y="0.348846" width="100" height="12" fill="#D2A3A3" />
              </g>
            </svg>

          </div>
          <svg className="text" width="100%" height="100%" viewBox="0 0 213 220" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M185.449 110C185.449 156.415 149.254 192.5 106.475 192.5C63.6956 192.5 27.5 156.415 27.5 110C27.5 63.5853 63.6956 27.5 106.475 27.5C149.254 27.5 185.449 63.5853 185.449 110Z" stroke="#FFABB5" strokeWidth="55" />
          </svg>
        </div>
        <div className="icon-dots">
          <svg className="dots" width="100%" height="100%" viewBox="0 0 48 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="12" height="30" rx="4" fill="#FFABB5" />
            <rect x="18" width="12" height="30" rx="4" fill="#FFB6BE" />
            <rect x="36" width="12" height="30" rx="4" fill="#FFC6CD" />
            <rect x="0.5" y="0.5" width="47" height="29" stroke="white" />
          </svg>
        </div>
      </div>
      <h1 className="title">Mo's Home</h1>
    </div>

  )
}

export default TopAnime
