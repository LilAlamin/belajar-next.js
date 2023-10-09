import React from 'react'
import { HeroImageBackground } from './component/page'
import { HeaderSimple } from './component/header'
import { FooterLinks } from './component/footer'
import { StatsGroup } from './component/page2'

export default function tugas() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      scrollbarWidth: 'none', /* Firefox */
      msOverflowStyle: 'none', /* Internet Explorer 10+ */
    }}>
      <style>
        {`
          /* Hide scrollbar for Chrome, Safari and Opera */
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
      <HeaderSimple/>
      <HeroImageBackground/>
      <StatsGroup/>
      <FooterLinks/>
    </div>
  )
}
