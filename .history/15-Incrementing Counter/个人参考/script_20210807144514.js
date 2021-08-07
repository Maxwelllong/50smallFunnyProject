const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    let num = Number(counte.innerText)

    console.log(target,num);

    if(num < target ){
        var timer = setInterval(function(){
            num += 5 ;
            counte.innerText = `${num}`
        },100)
    }else{
        clearInterval(timer)
    }

})

