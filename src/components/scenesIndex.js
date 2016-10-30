import schedule from '../scenes/schedule'
import sponsors from '../scenes/sponsors'
import speaker from '../scenes/speaker'

const scenes = {}

scenes.content = {
  schedule,
  sponsors,
  speaker,
}

scenes.index = [
  {
    title: 'Schedule',
    index: 0,
  },
  {
    title: 'Sponsors',
    index: 1,
  },
  {
    title: 'Speaker',
    index: 2,
  },
]

export default scenes
