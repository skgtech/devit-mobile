import React from 'react'
import { View } from 'react-native'
import { Text, ListItem, Icon, Thumbnail } from 'native-base'

const SpeakerItem = ({
  time,
  talk,
  speaker,
  duration,
  image,
  current,
  styles,
  currentListItem,
}) => (
  <ListItem
    style={[currentListItem(current), { paddingTop: 20, paddingBottom: 20 }]}
    button
  >
    <View style={styles.col1}>
      <Text style={styles.details}>{time}</Text>
      <Thumbnail style={styles.thumbnail} square size={60} source={image} />
    </View>
    <View style={styles.col2}>
      <Text style={styles.title}>{talk}</Text>
      <Text style={styles.details}>{speaker}</Text>
      <Text style={styles.details}>{duration} min</Text>
      <Text style={styles.badge}>GIVE FEEDBACK</Text>
    </View>
    <View style={styles.col3}>
      <Icon name="ios-arrow-forward" />
    </View>
  </ListItem>
)

SpeakerItem.propTypes = {
  time: React.PropTypes.string,
  current: React.PropTypes.bool,
  talk: React.PropTypes.string,
  speaker: React.PropTypes.string,
  duration: React.PropTypes.number,
  image: React.PropTypes.number,
  styles: React.PropTypes.objectOf(
    React.PropTypes.any,
  ),
  currentListItem: React.PropTypes.func,
}

export default SpeakerItem
