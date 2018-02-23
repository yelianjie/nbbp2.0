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
 * Dataurl to File
 * @param {*} dataurl
 * @param {*} filename
 */
export const dataURLtoFile = (dataurl, filename) => {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, {type: mime})
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

/**
 * 根据名字返回省市信息
 * @param {*} province
 * @param {*} city
 * @param {*} datas
 */
export const filterRegionByName = (province, city, datas) => {
  let findProvice = datas.find((v, i) => v.name.indexOf(province) !== -1)
  let findCity = datas.find((v, i) => v.name.indexOf(city) !== -1)
  if (findProvice && findCity) {
    return {
      province: findProvice.name,
      province_id: findProvice.value,
      city: findCity.name,
      city_id: findCity.value
    }
  } else {
    return {}
  }
}

/**
 * 根据省市ID返回信息
 * @param {*} provinceId
 * @param {*} cityId
 * @param {*} datas
 */
export const filterRegionById = (provinceId, cityId, datas) => {
  let findProvice = datas.find((v, i) => v.value === provinceId)
  let findCity = datas.find((v, i) => v.value === cityId)
  if (findProvice && findCity) {
    return {
      province: findProvice.name,
      province_id: findProvice.value,
      city: findCity.name,
      city_id: findCity.value
    }
  } else {
    return {}
  }
}
/* export const dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new window.Blob([u8arr], { type: mime });
} */

export const debounce = (fn, delay) => {
  // 定时器，用来 setTimeout
  var timer
  // 返回一个函数，这个函数会在一个时间区间结束后的 delay 毫秒时执行 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments
    // 每次这个返回的函数被调用，就清除定时器，以保证不执行 fn
    clearTimeout(timer)
    // 当返回的函数被最后一次调用后（也就是用户停止了某个连续的操作），
    // 再过 delay 毫秒就执行 fn
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

export const throttle = (fn, threshhold) => {
  // 记录上次执行的时间
  var last
  // 定时器
  var timer
  // 默认间隔为 250ms
  threshhold || (threshhold = 250)
  // 返回的函数，每过 threshhold 毫秒就执行一次 fn 函数
  return function () {
    // 保存函数调用时的上下文和参数，传递给 fn
    var context = this
    var args = arguments
    var now = +new Date()
    // 如果距离上次执行 fn 函数的时间小于 threshhold，那么就放弃
    // 执行 fn，并重新计时
    if (last && now < last + threshhold) {
      clearTimeout(timer)
      // 保证在当前时间区间结束后，再执行一次 fn
      timer = setTimeout(function () {
        last = now
        fn.apply(context, args)
      }, threshhold)
    // 在时间区间的最开始和到达指定间隔的时候执行一次 fn
    } else {
      last = now
      fn.apply(context, args)
    }
  }
}
