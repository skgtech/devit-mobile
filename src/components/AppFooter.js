import React from 'react'
import { FooterTab, Button, Icon } from 'native-base'

const AppFooter = () => (
  <FooterTab>
    <Button transparent>
      <Icon name="md-book" />
    </Button>
    <Button transparent>
      <Icon name="md-person" />
    </Button>
    <Button transparent>
      <Icon name="md-briefcase" />
    </Button>
    <Button transparent>
      <Icon name="md-map" />
    </Button>
    <Button transparent>
      <Icon name="logo-twitter" />
    </Button>
  </FooterTab>
)

export default AppFooter
