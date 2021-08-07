const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    const num = Number(counte.innerText)

    console.log(target,num);

    if(num < target){
        let addNum = Math.ceil(target / num)
        var timer = setInterval(()=>{
            counte.innerText = `${addNum}`
        },1000)
        
    }else{
        clearInterval(timer)
    }

})

