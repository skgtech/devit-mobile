import React from 'react'
import { StyleSheet } from 'react-native'

import SpeakerItem from './SpeakerItem'
import BreakItem from './BreakItem'
import RegistrationItem from './RegistrationItem'

const styles = StyleSheet.create({
  ListItem: {
    padding: 40,
  },
  thumbnail: {
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#69f',
    marginTop: 10,
  },
  col1: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  col2: {
    flex: 7,
    justifyContent: 'center',
  },
  col3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#69f',
  },
  details: {
    color: '#999',
  },
  badge: {
    color: 'orange',
    fontSize: 12,
  },
})

const currentListItem = cur => ({
  backgroundColor: cur ? '#edf5ff' : null,
})

const ScheduleItem = ({
  type,
  data,
}) => {
  switch (type) {
    case 'speaker':
      return (
        <SpeakerItem
          {...data}
          currentListItem={currentListItem}
          styles={styles}
        />
      )
    case 'break':
      return (
        <BreakItem
          {...data}
          currentListItem={currentListItem}
          styles={styles}
        />
      )
    case 'registration':
      return (
        <RegistrationItem
          {...data}
          currentListItem={currentListItem}
          styles={styles}
        />
      )
    default:
      throw new Error('Unexpected Schedule Item')
  }
}

ScheduleItem.propTypes = {
  type: React.PropTypes.string,
  data: React.PropTypes.objectOf(
    React.PropTypes.any,
  ),
}

export default ScheduleItem
