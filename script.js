document.addEventListener('DOMContentLoaded', function () {
  $(document).ready(function () {
    var dragged
    var score = 0
    $('#containerBox').hide()

    function countScore () {
      score++
      finalScore = document.getElementById('getScore')
      finalScore.innerHTML = score
      win()
    }

    function win () {
      if (score == 8) {
        playerMsg = document.getElementById('gameStatus')
        playerMsg.innerHTML = 'Congratulations you are a genius!'
        clearInterval(timer)
      }
    }

    function lose () {
      if (counter === 0 && score < 8) {
        playerMsg = document.getElementById('gameStatus')
        playerMsg.innerHTML = 'Please try again!'
      }
    }
    // function countdown ()
    var counter = 30
    var timer
    var startButton = document.getElementById('start')
    startButton.addEventListener('click', function () {
      counter = 30
      $('#containerBox').show()
      timer = setInterval(function () {
        counter--
        counterTime = document.getElementById('getTime')
        counterTime.innerHTML = counter
        if (counter === 0) {
          clearInterval(timer)
          lose()
        }
      }, 1000)
    })
    function restart () {
      playerMsg = document.getElementById('gameStatus')
      playerMsg.textContent = 'Game Status'
      counterTime = document.getElementById('getTime')
      counterTime.textContent = ''
      finalScore = document.getElementById('getScore')
      finalScore.textContent = ''
      clearInterval(timer)
      score = 0
  // return all answers back to original position
      var containerBox = document.getElementById('containerBox')
      var answers = document.querySelectorAll('.answer')
      answers.forEach(function (elm) {
        containerBox.appendChild(elm)
      })
    }
      // restart all values back to start
    var restartButton = document.getElementById('restart')
    restartButton.addEventListener('click', function () {
      $('#containerBox').hide()
      restart()
    })

    function gameOver () {
      if (win() || counter === 0) {
        return true
      } else {
        return false
      }
    }

    // drag and drop
    document.addEventListener('dragstart', function (event) {
      dragged = event.target
      event.target.style.opacity = 0.5
    }, false)

    document.addEventListener('dragend', function (event) {
      event.target.style.opacity = 1
    }, false)

    document.addEventListener('dragover', function (event) {
      event.preventDefault()
    }, false)

    document.addEventListener('dragenter', function (event) {
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
})
