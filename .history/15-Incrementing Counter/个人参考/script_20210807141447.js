const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = counte.getAttribute('data-target')
    const num = Number(counter.innerText)
    // console.log(counte,target);
    var timer = setInterval(function(){
        if(num <= target){
            counte.innerText  = num ;
           num += Math.floor(target/counte.innerText)
        }else{
            clearInterval(timer)
        }
    },100)



})

