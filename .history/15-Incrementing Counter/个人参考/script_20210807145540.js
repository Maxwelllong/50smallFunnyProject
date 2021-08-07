const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    const target = Number(counte.getAttribute('data-target'))
    let num = Number(counte.innerText)

    console.log(num,target);

    const addNum = Math.ceil(target / 200)

    if(num < target ){
       setTimeout(() => {
        counte.innerText = `${addNum}`
       }, 100);
    }else{
        counte.innerText = target.toString
    }

})

