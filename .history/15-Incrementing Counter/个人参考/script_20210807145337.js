const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = Number(counte.getAttribute('data-target'))
    let num = Number(counte.innerText)

    console.log(num,target);

    const addNum = target / 200

    if(num < target ){
       counte.innerText = `${addNum}`
    }else{
        counte.innerText = target.toString
    }

})

