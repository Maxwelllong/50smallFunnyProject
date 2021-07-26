const lis = document.querySelectorAll('li')
// 获取页面4/5的高度
window.addEventListener('scroll' , box)

box() //为什么要将box单独提出来主要是因为scroll连续触发，二写在外面能，写在listener里面不能连续触发

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
