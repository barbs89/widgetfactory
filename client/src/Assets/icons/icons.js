import React from 'react'

const BorderRoundIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <rect className="IconFeature" x="7" y="7" width="26" height="26" rx="4" ry="4"/>
  </svg>
) 

const BorderSharpIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <path className="IconFeature" d="M7,7H33V33H7Z" transform="translate(0 0)"/>
  </svg>
)

const AlignCentreIcon = () => (
<svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <rect className="IconFeature" x="7" y="22" width="26" height="2.5"/>
    <rect className="IconFeature" x="11" y="28" width="18" height="2.5"/>
    <rect className="IconFeature" x="10" y="16" width="20" height="2.5"/>
    <rect className="IconFeature" x="7" y="10" width="26" height="2.5"/>
  </svg>
)

const AlignJustifyIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <rect className="IconFeature" x="7" y="10" width="26" height="2.6"/>
    <rect className="IconFeature" x="7" y="16.1" width="26" height="2.6"/>
    <rect className="IconFeature" x="7" y="22.3" width="26" height="2.6"/>
    <rect className="IconFeature" x="7" y="28.4" width="26" height="2.6"/>
  </svg>
)

const AlignRightIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <rect className="IconFeature" x="7" y="10" width="26" height="2.6"/>
    <rect className="IconFeature" x="15" y="16.1" width="18" height="2.6"/>
    <rect className="IconFeature" x="9" y="22.3" width="24" height="2.6"/>
    <rect className="IconFeature" x="11" y="28.4" width="22" height="2.6"/>
  </svg>
)

const AlignLeftIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <rect className="IconFeature" x="7" y="10" width="26" height="2.5"/>
    <rect className="IconFeature" x="7" y="16" width="18" height="2.5"/>
    <rect className="IconFeature" x="7" y="22" width="24" height="2.5"/>
    <rect className="IconFeature" x="7" y="28" width="22" height="2.5"/>
  </svg>
)

const FontItalicsIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <path className="IconFeature" d="M20.45,28H17L20,10.94H23.4Z" transform="translate(0 0)"/>
  </svg>
)

const FontBoldIcon = () => (
  <svg viewBox="0 0 39 40" width="40" height="40">
    <path className="IconBackground" d="M0,0H40V40H0Z" transform="translate(0 0)"/>
    <path className="IconFeature" d="M13.86,28V10.94h6a7.87,7.87,0,0,1,4.71,1.19,4.05,4.05,0,0,1,1.6,3.48,3.88,3.88,0,0,1-.64,2.22,3.7,3.7,0,0,1-1.8,1.39,3.56,3.56,0,0,1,2.07,1.33A3.85,3.85,0,0,1,26.54,23,4.5,4.5,0,0,1,25,26.71,7.13,7.13,0,0,1,20.49,28Zm3.52-7.43v4.61h3a2.91,2.91,0,0,0,1.93-.59A2,2,0,0,0,23,23a2.14,2.14,0,0,0-2.42-2.38Zm0-2.48H20c1.77,0,2.66-.74,2.66-2.13A2,2,0,0,0,22,14.3a3.54,3.54,0,0,0-2.12-.51H17.38Z" transform="translate(0 0)"/>
  </svg>
)

const CheckboxTickIcon = () => (
<svg viewBox="0 0 39 40" width="40" height="40">
  <path className="IconBackground" d="M0,0H39V40H0Z" transform="translate(0 0)"/>
  <path className="IconShowFeature" d="M29.18,9.45a3.53,3.53,0,0,0-4.81,1.37L17.8,22.64,14,18.88a3.54,3.54,0,1,0-5,5L16.11,31a3.54,3.54,0,0,0,2.5,1,2.63,2.63,0,0,0,.49,0,3.54,3.54,0,0,0,2.61-1.78l8.84-15.92A3.53,3.53,0,0,0,29.18,9.45Z" transform="translate(0 0)"/>
</svg>
)

export {
  BorderRoundIcon,
  BorderSharpIcon,
  AlignCentreIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  FontItalicsIcon,
  FontBoldIcon,
  CheckboxTickIcon
  
}