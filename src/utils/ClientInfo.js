const getBrowserName = () => {
  if ((navigator.userAgent.indexOf('Opera') !== -1 || navigator.userAgent.indexOf('OPR')) !== -1) {
    return 'Opera'
  }
  else if (navigator.userAgent.indexOf('Chrome') !== -1) {
    return 'Chrome'
  }
  else if (navigator.userAgent.indexOf('Safari') !== -1) {
    return 'Safari'
  }
  else if (navigator.userAgent.indexOf('Firefox') !== -1) {
    return 'Firefox'
  }
  else if (navigator.userAgent.indexOf('Edge') !== -1) {
    return 'Edge'
  }
  else if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) {
    return 'Internet Explorer'
  }
  return 'Unknown'
}

const getOSName = () => {
  if (navigator.userAgent.indexOf("Linux") !== -1) return 'Linux OS'
  if (navigator.userAgent.indexOf("Win") !== -1) return 'Windows OS'
  if (navigator.userAgent.indexOf("Mac") !== -1) return 'Macintosh'
  if (navigator.userAgent.indexOf("Android") !== -1) return 'Android OS'
  if (navigator.userAgent.indexOf("like Mac") !== -1) return 'iOS'
  return 'Unknown'
}

export { getBrowserName, getOSName }
