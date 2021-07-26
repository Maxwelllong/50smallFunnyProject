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
    loading.style.opacity = scale(load,0,100,1,0); //从 0.0 （完全透明）到 1.0（完全不透明）。
}

function scale(num , in_min , in_max , out_min ,out_max ){
    return (num - in_min)*(out_max - out_min) / (in_max - in_min ) + in_min;
}