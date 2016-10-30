import React from 'react'
import { List } from 'native-base'

import ScheduleItem from '../scheduleItem'

const SessionsTab = () => (
  <List>
    <ScheduleItem
      type="registration"
      data={{
        time: '08:00',
        current: false,
      }}
    />
    <ScheduleItem
      type="speaker"
      data={{
        time: '09:00',
        current: false,
        talk: 'Server Side Renderin...',
        speaker: 'Forbes Lindsay',
        duration: 40,
        image: require('../../assets/microsoft.png')
      }}
    />
    <ScheduleItem
      type="speaker"
      data={{
        time: '10:00',
        current: true,
        talk: 'Scaling applications us...',
        speaker: 'Simona Cotin',
        duration: 40,
        image: require('../../assets/microsoft.png')
      }}
    />
    <ScheduleItem
      type="break"
      data={{
        time: '11:00',
        current: false,
        breakType: 'coffee',
      }}
    />
    <ScheduleItem
      type="speaker"
      data={{
        time: '12:00',
        current: false,
        talk: 'Pixel Adventure',
        speaker: 'Roger Wilco',
        duration: 40,
        image: require('../../assets/microsoft.png')
      }}
    />
    <ScheduleItem
      type="break"
      data={{
        time: '13:00',
        current: false,
        breakType: 'lunch',
      }}
    />
  </List>
)

export default SessionsTab
