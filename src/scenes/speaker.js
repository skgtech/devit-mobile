import React from 'react'

import {
  Container,
  Footer,
  Content,
} from 'native-base'

import AppContent from '../components/speaker/AppContent'
import AppFooter from '../components/AppFooter'

const speakerScene = navigator => (
  <Container style={{ flex: 1, alignSelf: 'stretch' }}>
    <Content>
      <AppContent navigator={navigator} style={{ flex: 1, alignSelf: 'stretch' }} />
    </Content>
    <Footer>
      <AppFooter />
    </Footer>
  </Container>
)

export default speakerScene
