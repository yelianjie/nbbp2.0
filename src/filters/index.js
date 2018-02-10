import Faces from '@/assets/face/faces'
import Levels from '@/assets/level/level-show'
const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API

export const prefixImageUrl = (url) => {
  if (!url) {
    return
  }
  if (url.indexOf('http') === 0) {
    return url
  }
  return baseURL + url
}

export const filterFace = (msg) => {
  if (!msg) {
    return
  }
  Faces.map(v => {
    var reg = new RegExp('\\[' + v.value + '\\]', 'g')
    msg = msg.replace(reg, '<img src="' + v.icon + '" class="face-icon"/>')
  })
  return msg
}

export const filterLevel = (levelName, field) => {
  var o = Levels[levelName]
  if (o && o.hasOwnProperty(field)) {
    return o[field]
  } else {
    return ''
  }
}
