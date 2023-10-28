function showTime(){
    var now = new Date()
    var year = now.getFullYear()
    var month = now.getMonth() + 1 // Jan is 0
    var day = now.getDate()

    if (month < 10) month = "0" + month
    if (day < 10) day = "0" + day

    var fullDate = `${month}/${day}/${year}`
    $("#date").text(fullDate)

    var hour = now.getHours()
    var minutes = now.getMinutes()
    var seconds = now.getSeconds()
    var isPm = hour > 12
    var lastPart = isPm ? "PM" : "AM"

    if (hour < 10) hour = "0" + hour
    if (minutes < 10) minutes = "0" + minutes
    if (seconds < 10) seconds = "0" + seconds

    var fullTime = `${hour}:${minutes}:${seconds} ${lastPart}`
    $("#clock").text(fullTime)
}

showTime()
setInterval(showTime, 1000)


