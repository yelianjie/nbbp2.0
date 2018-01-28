// 获取blob对象的兼容性写法
export const getBlob = (buffer, format) => {
  var Builder = window.WebKitBlobBuilder || window.MozBlobBuilder
  if(Builder){
    var builder = new Builder
    builder.append(buffer)
    return builder.getBlob(format)
  } else {
    return new window.Blob([ buffer ], {type: format})
  }
}

export const dataURLtoBlob = function (dataurl) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
  }
  return new window.Blob([u8arr], { type: mime });
}
