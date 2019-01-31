// Write your numbers code in this file!

function fetchTrivia(num) {
  return fetch(`http://numbersapi.com/${num}/trivia`).then(res => res.text())
}

function numberOne() {
  const div = document.querySelector('#one-facts')
  fetchTrivia(1).then(trivia => {
    div.innerHTML = trivia
  })
}

function pickFact(){
  const div = document.querySelector('#random-math-fact')
  const num = document.querySelector('#pick-a-number').value

    if (isNaN(num)) {
      div.innerHTML = 'please enter a valid number'
    }
    else {
      fetchTrivia(num).then(trivia => {
      div.innerHTML = trivia
    })
  }
}

function currentYearFact(year) {
  return fetch(`http://numbersapi.com/${year}/year`).then(res => res.text())
}

function showYearFact(year) {
  const div = document.querySelector('#year-history')
  currentYearFact(year).then(fact => {
    div.innerHTML = fact
  })
}

function currentYear(){
  let year = new Date().getFullYear()
  showYearFact(year)
  setInterval(() => {
   year--
   showYearFact(year)
 }, 5000)
}

function getAllNumbers() {
  return fetch('http://numbersapi.com/1..100').then(res => res.json())
}

function showAllNumbers() {
  const div = document.querySelector('#all-the-numbers')
  getAllNumbers().then(numbers => {
    let html = '<ul>'
    for (key in numbers) {
      html += `<li>${numbers[key]}</li>`
    }
    html += '</ul>'
    div.innerHTML = html
  })
}

document.addEventListener('DOMContentLoaded', doSomething)

function doSomething(){
  let oneFactButton = document.getElementById('number-one')
  oneFactButton.addEventListener('click', numberOne)
  let pickNumberField = document.getElementById('pick-a-number')
  pickNumberField.addEventListener('change', pickFact)
  currentYear()
  let allNumbersButton = document.getElementById('all-numbers-button')
  allNumbersButton.addEventListener('click', showAllNumbers)
}
