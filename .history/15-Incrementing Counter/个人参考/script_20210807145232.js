const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = Number(counte.getAttribute('data-target'))
    let num = Number(counte.innerText)

    console.log(num,target);

    if(num < target ){
       
    }else{
        counte.innerText = target.toString
    }

})

