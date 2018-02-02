const baseURL = process.env.NODE_ENV === 'production' ? require('../../config/prod.env').BASE_API : require('../../config/dev.env').BASE_API

export const prefixImageUrl = (url) => {
  if (url.indexOf('http') === 0) {
    return url
  }
  return baseURL + url
}
