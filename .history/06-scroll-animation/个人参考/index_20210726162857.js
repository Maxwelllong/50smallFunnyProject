const lis = document.querySelectorAll('li')
// 获取页面高度
const DocHeight = window.innerHeight / 5 * 4 ;
// 获取第三个li元素 距离顶部距离

lis.forEach((item,index)=>{
    const LiHeight = lis.getBoundingClientRect().top;
    if(LiHeight < DocHeight){
        lis.classList.add('show')
    }else{
        lis.classList.remove('show')
    }
})