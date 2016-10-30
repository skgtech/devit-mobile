import React from 'react'

import {
  Container,
  Header,
  Footer,
  Content,
  Title,
} from 'native-base'

import AppContent from '../components/schedule/AppContent'
import AppFooter from '../components/AppFooter'

const scheduleScene = (navigator) => {
  console.log(navigator)

  return (
    <Container>
      <Header>
        <Title>
          SCHEDULE
        </Title>
      </Header>
      <Content>
        <AppContent />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Container>
  )
}

export default scheduleScene
