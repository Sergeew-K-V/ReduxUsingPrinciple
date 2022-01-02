const btnAdd = document.getElementById('btn-add')
const btnSub = document.getElementById('btn-sub')
const btnAsync = document.getElementById('btn-async')
const counterPlace = document.getElementById('counter')

//// Addition Inputs and btns
const inputPlace = document.getElementById('input')
const input = document.getElementById('inputText')
const btnInput = document.getElementById('button-addText')
////

const delay = 2000
let counter = 0

function render() {
  counterPlace.textContent = counter.toString()
}

btnAdd.addEventListener('click', () => {
  counter++
  render()
})
btnSub.addEventListener('click', () => {
  counter--
  render()
})
btnAsync.addEventListener('click', () => {
  setTimeout(() => {
    counter++
    render()
  }, delay)
})

//// Logic input

function renderInput() {}

btnInput.addEventListener('click', () => {
  inputPlace.value = input.value
})
