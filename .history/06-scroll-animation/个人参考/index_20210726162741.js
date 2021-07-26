const lis = document.querySelectorAll('li')
// 获取页面高度
const DocHeight = window.innerHeight * 5/4 ;
// 获取第三个li元素 距离顶部距离
const LiHeight = lis[2].getBoundingClientRect().top;
lis.forEach((item,index)=>{
    if(LiHeight < DocHeight){
        lis.classList.add('show')
    }else{
        lis.classList.remove('show')
    }
})