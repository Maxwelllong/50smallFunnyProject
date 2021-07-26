const bg = document.querySelector('.bg')
const loading = document.querySelector('.loadingText')

let load = 0 ;

const timer = setInterval( show() , 30)

function show(){
    load++;
    if(load > 99 ){
        clearInterval( timer )
    }
    loading.innerHTML = `${load}`;
    loading.
}