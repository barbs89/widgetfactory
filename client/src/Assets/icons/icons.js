import React from 'react'

const BorderRoundIcon = () => (
      <svg className='ReactIcon'id="BorderRoundIcon">  
      <rect className="BorderRoundIcon-1" width="40" height="40"/>
      <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
      <rect className="BorderRoundIcon-1" x="7" y="7" width="26" height="26"/>
      <rect className="BorderRoundIcon-3" x="7" y="7" width="26" height="26" rx="4" ry="4"/></svg>
) 

const BorderSharpIcon = () => (
  <svg className='ReactIcon'id="BorderSharpIcon">  
  <path className="BorderSharpIcon-1" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
  <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
  <path className="BorderSharpIcon-1" d="M7,7H33V33H7Z" transform="translate(0 0)"/>
  <path className="BorderSharpIcon-3" d="M7,7H33V33H7Z" transform="translate(0 0)"/></svg>
)

export {
  BorderRoundIcon,
  BorderSharpIcon
}