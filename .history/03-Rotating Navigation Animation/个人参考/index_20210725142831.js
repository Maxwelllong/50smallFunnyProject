// 获取元素
const circleContainer =  document.querySelector('.circle-container')
const close = document.querySelector('.close')
const open = document.querySelector('.open')

open.addEventListener('click', function () {
    circleContainer.classList.add('show-nav')
    console.log('1');
})
close.addEventListener('click', function () {
    circleContainer.classList.remove('show-nav')
    console.log('2');
})
