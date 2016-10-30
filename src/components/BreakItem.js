import React from 'react'
import { View } from 'react-native'
import { Text, ListItem, Icon } from 'native-base'

const BreakItem = ({
  breakType,
  time,
  current,
  styles,
  currentListItem,
}) => (
  <ListItem
    style={[currentListItem(current), { paddingTop: 20, paddingBottom: 20 }]}
  >
    <View style={styles.col1}>
      <Text style={styles.details}>{time}</Text>
    </View>
    <View style={styles.col2}>
      <Text style={styles.title}>{`${breakType} Break`}</Text>
    </View>
    <View style={styles.col3}>
      <Icon name={breakType === 'coffee' ? 'md-cafe' : 'md-restaurant'} />
    </View>
  </ListItem>
)

BreakItem.propTypes = {
  breakType: React.PropTypes.string,
  time: React.PropTypes.string,
  current: React.PropTypes.bool,
  styles: React.PropTypes.objectOf(
    React.PropTypes.any,
  ),
  currentListItem: React.PropTypes.func,
}

export default BreakItem
