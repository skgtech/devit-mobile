import React from 'react'

import {
  Container,
  Header,
  Footer,
  Content,
} from 'native-base'

import AppHeader from '../components/sample/AppHeader'
import AppFooter from '../components/sample/AppFooter'
import AppContent from '../components/sample/AppContent'

const sampleScene = () => (
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
