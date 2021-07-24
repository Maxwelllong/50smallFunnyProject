const panels = document.querySelectorAll('.panel')
// console.log(panels);
panels.forEach((item,index) =>{
    console.log(item);
    // 1.给每一个div添加点击事件
    item.addEventListener('click',function(){
        // console.log(index);
        // 2.当点击事件触发的时候移除所有的active类；
        panels.forEach(item =>{
            item.classList.remove('active')
        })
        // 3.给当前点击的panel添加active类；
        // console.log(item);
        // 
        item.className = 'panel ' + 'active'
        // console.log(item.className);

    })
    
    

})