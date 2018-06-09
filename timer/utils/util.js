function formatTime(time, format) {
  let temp = '0000000000' + time
  let len = format.length
  return temp.substr(-len)
}

module.exports = {
  formatTime: formatTime
}



function getLocalTime() {
  var time = new Date()
  var local = time.toLocaleString()
  return local
}

module.exports.getLocalTime = getLocalTime
