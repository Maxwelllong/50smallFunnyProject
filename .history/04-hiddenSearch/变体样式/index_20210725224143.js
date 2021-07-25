const container = document.querySelector('.container')
const input = document.querySelector('.input')
const btn = document.querySelector('.btn')

btn.addEventListener('click',function(){
    container.classList.toggle('.active')
})