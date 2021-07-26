const lis = document.querySelectorAll('li')
// 获取页面4/5的高度
window.addEventListener('scroll' , box)

box()

function box(){
    const DocHeight = window.innerHeight * 4 / 5  ;
    // console.log(DocHeight);
    lis.forEach(item =>{
        const itemTop = item.getBoundingClientRect().top
        console.log(itemTop);
        if(itemTop < DocHeight){
            item.classList.add('show')
        }else{
            item.classList.remove('show')
        }
    })
}
