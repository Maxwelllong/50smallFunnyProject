const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    const num = Number(counte.innerText)

    console.log(target,num);

    var timer = setInterval(function(){
        num += 5 ;
        counte.innerText = `${num}`
    },1000)

})

