const counters = document.querySelectorAll('.target')

counters.forEach((counte,index)=>{
    counte.innerText = '0'

    console.log(num,target);
    
    const counte =function() {
        const target = Number(counte.getAttribute('data-target'))
        let num = Number(counte.innerText)
    
        const addNum = Math.ceil(target / 200)

        if(num < target ){
            counte.innerText = `${num+addNum}`
            setTimeout(counte, 1000);
        }else{
            counte.innerText = target.toString
        }
    }

})

