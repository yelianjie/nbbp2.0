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
