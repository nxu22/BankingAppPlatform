//shortcut rafce
'use client'
import React from 'react'
// accept the props from page.tsx and define these type to a interface call HeaderBoxProps
interface HeaderBoxProps {
    type?: 'title' | 'greeting';
    title: string;
    subtext: string;
    user?: string;
  }
  
  const HeaderBox = ({ 
    type = "title", 
    title, 
    subtext, 
    user 
  }: HeaderBoxProps) => {
    return (
      <div className="header-box">
        <h1 className="header-box-title">
          {title}
          {type === 'greeting' && (
            <span className="text-bankGradient">
              &nbsp;{user}
            </span>
          )}
        </h1>
        <p className="header-box-subtext">{subtext}</p>
      </div>
    )
  }
  
  export default HeaderBox