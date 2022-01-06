import { createStore } from './createStore.js'
import { rootReducer } from '../redux/rootReducer.js'

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
const store = createStore(rootReducer, 0)

btnAdd.addEventListener('click', () => {})
btnSub.addEventListener('click', () => {})
btnAsync.addEventListener('click', () => {})
btnTheme.addEventListener('click', () => {
  //   document.body.classList.toggle('dark')
})

//// Logic input

btnInput.addEventListener('click', () => {})
