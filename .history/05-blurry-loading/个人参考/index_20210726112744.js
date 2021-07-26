const bg = document.querySelector('.bg')
const loading = document.querySelector('.loading-text')

const load = 0;

const timer = setInterval(blurring, 30)

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(timer)
    }
    loading.innerHTML = `${load}%`
    loading.style.opacity = scale(load,0,100,1,0)
    bg.style.filter = `blur(${scale()}px)`
}

function scale(num, in_min, in_max, out_min, out_max) {
    return ( num - in_min)*( out_max - out_min ) / (in_max - in_min) 
}