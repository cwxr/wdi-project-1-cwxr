document.addEventListener('DOMContentLoaded', function () {
  var dragged
  var score = 0

  function countScore () {
    score++
    finalScore = document.getElementById('getScore')
    finalScore.innerHTML = score
    win()
  }

  function win () {
    if (score == 3) {
      alert('You got it all right!')
    }
  }

  function restart () {}

  function gameOver () {
    if (win()) {
      return true
    } else {
      return false
    }
  }

  // function countdown ()
  var counter = 60
  var timer
  document.addEventListener('click', function () {
    timer = setInterval(function () {
      counter--
      counterTime = document.getElementById('getTime')
      counterTime.innerHTML = counter
      if (counter === 0) {
        clearInterval(timer)
      }
    }, 1000)
  })

  document.addEventListener('drag', function (event) {

  }, false)

    document.addEventListener('dragstart', function (event) {
          dragged = event.target
    console.log(dragged)
          event.target.style.opacity = 0.5
    }, false)

    document.addEventListener('dragend', function (event) {
          event.target.style.opacity = ''
    }, false)

    document.addEventListener('dragover', function (event) {
          event.preventDefault()
    }, false)

// black & white
    document.addEventListener('dragenter', function (event) {
    event.target.className == 'dropzone'
    if (event.target.className == 'dropzone') {
              event.target.style.background = 'red'
          }
    }, false)

    document.addEventListener('dragleave', function (event) {
          if (event.target.className == 'dropzone') {
              event.target.style.background = ''
          }
    }, false)

    document.addEventListener('drop', function (event) {
          event.preventDefault()
    // console.log(dragged.parentNode)
    if (event.target.className == 'dropzone') {
      if (event.target.id == dragged.id) {
        countScore()

                  event.target.style.background = ''
                  dragged.parentNode.removeChild(dragged)
                  event.target.appendChild(dragged)
      }
    }
    }, false)
})

// happy sad

  // document.addEventListener('dragenter', function (event) {
  //         if (event.target.className == 'dropzone') {
  //               event.target.style.background = 'red'
  //         }
  //   }, false)
  //
  //   document.addEventListener('dragleave', function (event) {
  //         if (event.target.className == 'dropzone') {
  //               event.target.style.background = ''
  //         }
  //   }, false)
  //
  //   document.addEventListener('drop', function (event) {
  //         event.preventDefault()
  //
  //         if (event.target.className == 'dropzone') {
  //               event.target.style.background = ''
  //               dragged.parentNode.removeChild(dragged)
  //               event.target.appendChild(dragged)
  //         }
  //   }, false)
