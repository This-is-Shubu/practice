
function randomColor() {
    const letters = '01234156789ABCDEF'
    let color = '#'
    for (i = 0; i < 6; i++) {
        color += letters[parseInt(Math.random() * 16)]
    }
    console.log(color);
    return color
}

const start = document.createElement('button')
start.innerHTML = 'change color'
document.body.appendChild(start);

// const breakLine = document.createElement('br')
// document.body.appendChild.apply(breakLine)

const stop = document.createElement('button')
stop.innerHTML = 'stop color change'
document.body.appendChild(stop)


start.addEventListener('click', function (e) {
    const changeColors = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000);
    stop.addEventListener('click', function (e) {
        clearInterval(changeColors)
    })
})



// const button = document.createElement = 'button'
// body.appendChild('button')
// setInterval()