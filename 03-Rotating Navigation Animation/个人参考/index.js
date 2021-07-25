// 获取元素
const container =  document.querySelector('.container')
const close = document.querySelector('.close')
const open = document.querySelector('.open')

open.addEventListener('click', function () {
    container.classList.add('show-nav')
    console.log('1');
})
close.addEventListener('click', function () {
    container.classList.remove('show-nav')
    console.log('2');
})
