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

// 获取blob对象的兼容性写法
export const dataURLtoBlob = (basestr, format) => {
  var text = window.atob(basestr.split(',')[1])
  var buffer = new Uint8Array(text.length)
  for (var i = 0; i < text.length; i++) {
    buffer[i] = text.charCodeAt(i)
  }
  var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder
  if (Builder) {
    var builder = new Builder()
    builder.append(buffer)
    return builder.getBlob(format)
  } else {
    return new window.Blob([ buffer ], {type: format})
  }
}

/**
 * 获取两点间距离
 * @param {*经度1} lon1 
 * @param {*维度1} lat1 
 * @param {*经度2} lon2 
 * @param {*维度2} lat2 
 */
export const getDistance = (lon1, lat1, lon2, lat2) => {
  const DEF_PI = Math.PI // PI
  const DEF_2PI = 2 * DEF_PI // 2*PI
  const DEF_PI180 = DEF_PI / 180 // PI/180.0
  const DEF_R = 6370693.5 // radius of earth
  var ew1, ns1, ew2, ns2
  var dx, dy, dew
  var distance
  // 角度转换为弧度
  ew1 = lon1 * DEF_PI180
  ns1 = lat1 * DEF_PI180
  ew2 = lon2 * DEF_PI180
  ns2 = lat2 * DEF_PI180
  // 经度差
  dew = ew1 - ew2
  // 若跨东经和西经180 度，进行调整
  if (dew > DEF_PI) {
    dew = DEF_2PI - dew
  } else if (dew < -DEF_PI) {
    dew = DEF_2PI + dew
  }
  dx = DEF_R * Math.cos(ns1) * dew // 东西方向长度(在纬度圈上的投影长度)
  dy = DEF_R * (ns1 - ns2) // 南北方向长度(在经度圈上的投影长度)
  // 勾股定理求斜边长
  distance = Math.sqrt(dx * dx + dy * dy)
  return distance
}

/* export const dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new window.Blob([u8arr], { type: mime });
} */
