const UrlParser = {
  parseActiveWithCombiner () {
    const url = window.location.hash.slice(1).toLocaleLowerCase()
    const splitedUrl = this._urlSplitter(url)
    return this._urlCombiner(splitedUrl)
  },

  parseAcvtiveUrlWithoutCombiner () {
    const url = window.location.hash.slice(1).toLowerCase()
    return this._urlSplitter(url)
  },
  _urlSplitter (url) {
    const urlsSplit = url.split('/')
    return {
      resource: urlsSplit[1] || null,
      id: urlsSplit[2] || null,
      verb: urlsSplit[3] || null
    }
  },
  _urlCombiner (splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
    (splitedUrl.id ? '/:id' : '') +
    (splitedUrl.verb ? `/${splitedUrl.verb}` : '')
  }
}
export default UrlParser
