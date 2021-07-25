// 获取所有的元素
const progress=document.querySelector('.progress')
const circles =document.querySelectorAll('.circle')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

// 给next点击事件绑定事件
let currentIndex = 1;
next.addEventListener('click',function(){
    //1.点击之后对应的数字的border变色否则移除
    currentIndex++;
    circles.forEach((item,index)=>{
        if(index < currentIndex){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    progress.style.width = (active.length-1)/(circles.length-1)*100 +'%'
})