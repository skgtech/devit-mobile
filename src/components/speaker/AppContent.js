import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import {
  Title,
  Button,
  Icon,
} from 'native-base'

import Speaker from '../Speaker'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    resizeMode: 'stretch',
    height: null,
    width: null,
  },
  topBar: {
    flexDirection: 'row',
  },
})

const AppContent = ({
  navigator,
}) => (
  <Image
    style={styles.backgroundImage}
    source={require('../../assets/bg.jpg')}
  >
    <View style={styles.topBar}>
      <Button transparent onPress={() => navigator.pop()}>
        <Icon name="ios-arrow-back" />
      </Button>
      <Title>
        SPEAKER
      </Title>
    </View>
    <Speaker style={{ flex: 1, alignSelf: 'stretch' }}
      {
        ...{
          name: 'Forbes Lindsay',
          workplace: 'Facebook',
          image: require('../../assets/microsoft.png'),
          about: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          social: {
            facebook: 'http://',
            twitter: '@forbes',
            linkedin: 'http://',
            website: 'http://',
            github: 'http://github',
          },
        }
      }
    />
  </Image>
)

AppContent.propTypes = {
  navigator: React.PropTypes.objectOf(
    React.PropTypes.any,
  ),
}

export default AppContent
