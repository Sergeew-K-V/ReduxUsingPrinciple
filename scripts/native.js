const btnAdd = document.getElementById('btn-add')
const btnSub = document.getElementById('btn-sub')
const btnAsync = document.getElementById('btn-async')
const counterPlace = document.getElementById('counter')
const btnTheme = document.getElementById('btn-theme')

//// Addition Inputs and btns
const inputPlace = document.getElementById('input')
const input = document.getElementById('inputText')
const btnInput = document.getElementById('button-addText')
////

const delay = 2000
let counter = 0
counterPlace.textContent = counter

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
btnTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark')
})

//// Logic input

btnInput.addEventListener('click', () => {
  inputPlace.innerHTML = input.value
  input.value = ''
})
