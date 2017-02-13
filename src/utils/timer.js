const reptms = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/
let hours = 0,
    minutes = 0,
    seconds = 0

const durationToSecond = (duration) => {
  if (reptms.test(duration)) {
    var matches = reptms.exec(duration)
    if (matches[1]) hours = Number(matches[1])
    if (matches[2]) minutes = Number(matches[2])
    if (matches[3]) seconds = Number(matches[3])
    return hours * 3600  + minutes * 60 + seconds
  }
}

const secondToHHMMSS = (second) => {
  var sec_num = parseInt(second, 10); // don't forget the second param
  var hours   = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
  var seconds = sec_num - (hours * 3600) - (minutes * 60);

  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds;
}

export {
  durationToSecond,
  secondToHHMMSS
}
