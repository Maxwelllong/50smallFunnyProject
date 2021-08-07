const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    const num = Number(counte.innerText)

    console.log(target,num);

    if(num < target ){
        var timer = setInterval(function(){
            const conNum = Math.ceil(target / num)
            counte.innerText = `${conNum}`
        },1000)
    }else{
        counte.innerText = target ;
    }

})

