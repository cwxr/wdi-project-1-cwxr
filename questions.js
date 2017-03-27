document.addEventListener('DOMContentLoaded', function () {
// opposites match
  var question1 = new Question('white', 'black')
  var question2 = new Question('.sad', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 1)
  var question3 = new Question('.slow', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 2)
  var question4 = new Question('.old', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 3)
  var question5 = new Question('.cold', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 4)
  var question6 = new Question('.day', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 5)
  var question7 = new Question('.hungry', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 6)
  var question8 = new Question('.work', ['.black', '.happy', '.fast', '.new', '.hot', '.night', '.full', '.play'], 7)

  // var opposites = new Quiz([question1, question2, question3, question4, question5, question6, question7, question8], opposites)
  var opp = [question1, question2, question3, question4, question5, question6, question7, question8]
  $('div').className = question1.question
})



document.addEventListener('click', function(){
  timer = setInterval(function () {
    counter--
    counterTime = document.getElementById('getTime')
    counterTime.innerHTML = counter
    if (counter === 0) {
      clearInterval(timer)
    })
  }, 1000)
})
