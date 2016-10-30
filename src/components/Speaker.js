import React from 'react'

import { View, StyleSheet } from 'react-native'
import {
  Text,
  Thumbnail,
  Button,
  Icon,
} from 'native-base'

const styles = StyleSheet.create({
  thumbnail: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#69f',
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    paddingTop: 10,
  },
  workplace: {
    color: 'white',
    fontSize: 16,
    paddingBottom: 10,
  },
  blockquote: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    marginBottom: 0,
    padding: 10,
    elevation: 2,
  },
  social: {
    flexDirection: 'row',
  },
  socialButton: {
    color: '#69f',
  },
})

const Speaker = ({
  name,
  workplace,
  about,
  image,
  social,
}) => (
  <View style={{ alignItems: 'center' }}>
    <Thumbnail style={styles.thumbnail} square size={100} source={image} />
    <Text style={styles.name}>
      {name}
    </Text>
    <Text style={styles.workplace}>
      {workplace}
    </Text>
    <View style={styles.blockquote}>
      <Text style={{ color: '#69f' }}>About {name.split(' ')[0]}</Text>
      <Text style={{ fontSize: 12, paddingTop: 0, color: '#aaa' }}>{about}</Text>
    </View>
    <View style={[styles.social, styles.blockquote, { marginBottom: 2 }]}>
      <Button color="#69f" transparent>
        <Icon name="logo-facebook" />
      </Button>
      <Button color="#69f" transparent>
        <Icon name="logo-linkedin" />
      </Button>
      <Button color="#69f" transparent>
        <Icon name="logo-twitter" />
      </Button>
      <Button color="#69f" transparent>
        <Icon name="md-globe" />
      </Button>
      <Button color="#69f" transparent>
        <Icon name="logo-github" />
      </Button>
    </View>
  </View>
)

export default Speaker
