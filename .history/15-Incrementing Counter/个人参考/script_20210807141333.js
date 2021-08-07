const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    const num = Number(counter.innerText)
    // console.log(counte,target);
    var timer = setInterval(function(){
        if(counte.innerText <= data.target){
            counte.innerText += Math.floor(target/counte.innerText)
        }else{
            clearInterval(timer)
        }
    },1)



})

