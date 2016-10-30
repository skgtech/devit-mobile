import schedule from '../scenes/schedule'
import sponsors from '../scenes/sponsors'

const scenes = {}

scenes.content = {
  schedule,
  sponsors,
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
]

export default scenes
