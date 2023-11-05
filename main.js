const btn = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.modal__close-btn')
const body = document.body

btn.addEventListener('click' , () => {
  modal.classList.add('modal--open')
  body.classList.add('body--fix') 
})
modal.addEventListener('click' , (event) => {
  const target = event.target
  if (target.tagName !== 'modal__window') {
      target.classList.remove('modal--open')
      body.classList.remove('body--fix') 
  }
})
btnClose.addEventListener('click', () => {
  modal.classList.remove('modal--open')
  body.classList.remove('body--fix') 
})
document.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains('modal--open')) {
    modal.classList.remove('modal--open')
    body.classList.remove('body--fix') 
  } 
})