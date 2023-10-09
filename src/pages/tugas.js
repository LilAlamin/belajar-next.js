import React from 'react'
import { HeroImageBackground } from '../component/page'
import { HeaderSimple } from '../component/header'
import { FooterLinks } from '../component/footer'
import { StatsGroup } from '../component/page2'
import { Container, Center, Title } from '@mantine/core';

import { LeadGrid } from '../component/page3'

export default function tugas() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      overflow: 'auto',
      scrollbarWidth: 'none', 
      msOverflowStyle: 'none', 
    }}>
      <style>
        {`
          div::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
  
      <HeaderSimple/>
      <HeroImageBackground/>
      <StatsGroup/>
  
      <Container size="xl" padding="lg">
        <Center>
          <Title order={1} align="center">On Trending Games</Title>
        </Center>
      </Container>
        
      <LeadGrid/>
      <FooterLinks/>
    </div>
  )
}
