var div = document.createElement('div')
div.className = 'demo'
//div.style.top = 'auto'

document.body.appendChild(div)
var dragging = false

var lastX
var lastY

div.onmousedown = function (e) {
    console.log('original')
    console.log(e.clientX, e.clientY)
    lastX = e.clientX
    lastY = e.clientY
    dragging = true
}

document.onmousemove = function (e) {

    if (dragging === true) {
        //console.log(lastX, lastY)
        //console.log(e.clientX, e.clientY)
        var deltaX = e.clientX - lastX
        var deltaY = e.clientY - lastY
        var top = parseInt(div.style.top) || 0
        var left = parseInt(div.style.left) || 0
        console.log('top')
        console.log(top)
        console.log('left')
        console.log(left)
        var resultX = left + deltaX
        var resultY = top + deltaY
        if (resultX < 0) {
            resultX = 0
        }
        if (resultY < 0) {
            resultY = 0
        }
        div.style.top = resultY + 'px'
        div.style.left = resultX + 'px'
        lastX = e.clientX
        lastY = e.clientY

    }

    div.onmouseup = function () {
        dragging = false
    }
}
