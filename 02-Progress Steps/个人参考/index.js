//1.获取circle、progress和prev、next元素为下一步点击事件做准备
const circle = document.querySelectorAll('.circle')
const progress = document.querySelector('.progress')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
//2.给相应的元素添加动画效果
// 2.1 ‘2’ 边框颜色变色,点击next，实现progress显示1-2
let currentIndex = 1;
nextBtn.addEventListener('click',()=>{
    currentIndex++;
    //1.实现小于currentindex的圈变色;
    change();

})
prevBtn.addEventListener('click',function(){
    currentIndex--;
    change()
})

function change(){
    circle.forEach((item,index)=>{
        if(index < currentIndex){
            item.classList.add('active')
        }else{
            item.classList.remove('active')
        }
    })
    // console.log(progress);
    const active = document.querySelectorAll('.active')
    //2.实现progress变化;
    progress.style.width=((active.length -1 ) / (circle.length-1))*100+'%';
    //3.解除prev按钮默认状态；  
    if(currentIndex === 1){
        prevBtn.disabled = true;
    }else if(currentIndex === circle.length){
        nextBtn.disabled = true ;
    }else{
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}
    


