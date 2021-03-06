import React from 'react'

import {
  Container,
  Footer,
  Content,
} from 'native-base'

import AppContent from '../components/sponsors/AppContent'
import AppFooter from '../components/AppFooter'

const sponsorsScene = (nagivator) => {
  console.log(nagivator)

  return (
    <Container>
      <Content>
        <AppContent />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Container>
  )
}

export default sponsorsScene
