import React from 'react'
import {
  Text,
} from 'native-base'
import {
  View,
} from 'react-native'

import SponsorButton from '../../components/SponsorButton'

import skroutzLogo from '../../assets/skroutz.png'
import microsoftLogo from '../../assets/microsoft.png'

const AppContent = () => (
  <View>
    <Text>
      Sponsors
    </Text>
    <View
      style={{
        flex: 1,
      }}
    >
      <SponsorButton
        name="Skroutz"
        type="premium"
        image={skroutzLogo}
        externalUrl="http://skroutz.gr"
      />
      <SponsorButton
        name="Microsoft"
        type="premium"
        image={microsoftLogo}
        externalUrl="http://microsoft.com"
      />
    </View>
  </View>
)

export default AppContent
