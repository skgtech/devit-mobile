import React from 'react'

import {
  Container,
  Header,
  Footer,
  Content,
} from 'native-base'

import AppHeader from '../components/root/AppHeader'
import AppFooter from '../components/root/AppFooter'
import AppContent from '../components/root/AppContent'

const sampleScene = (
  <Container>
    <Header>
      <AppHeader />
    </Header>
    <Content>
      <AppContent />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Container>
)

export default sampleScene
