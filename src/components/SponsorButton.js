import React from 'react'
import { Button } from 'native-base'
import { Linking, Image } from 'react-native'

const SponsorButton = ({
  externalUrl,
  image,
}) => (
  <Button
    large
    block
    transparent
    onPress={() =>
      Linking.openURL(externalUrl).catch(err => console.error(err))
    }
  >
    <Image
      source={image}
      style={{
        flex: 1,
        alignSelf: 'stretch',
        width: null,
      }}
    />
  </Button>
)

SponsorButton.propTypes = {
  externalUrl: React.PropTypes.string,
  image: React.PropTypes.any,
}
// use https://facebook.github.io/react-native/docs/linking.html for opening external links

export default SponsorButton
