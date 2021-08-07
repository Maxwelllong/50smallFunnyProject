const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'
    counter(counte)
    
   
})

function counter(counte) {
    const target = Number(counte.getAttribute('data-target'))
    let num = Number(counte.innerText)

    const addNum = Math.ceil(target / 200)

    if(num < target ){
        counte.innerText = `${num+addNum}`
        setTimeout(counter, 10);
    }else{
        counte.innerText = target
    }
    // console.log(num,target);
}
