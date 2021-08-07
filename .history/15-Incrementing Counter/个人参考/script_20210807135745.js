const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    console.log(counte);
    counte.innerText = '0'

    var timer = setInterval(function(){
        if(counte.innerText <= data.target)
    },1)



})

