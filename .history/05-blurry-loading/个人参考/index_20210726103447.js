const bg = document.querySelector('.bg')
const loading = document.querySelector('.loading-text')

const load = 0;

const timer = setInterval(blurring,30)

function blurring(){
    load++ ;
    if(load > 99){
        clearInterval(timer)
    }
    loading.innerHTML = `${load}%`
    loading.style.opacity = scale()
    bg.style.filter = `blur(px)`
}