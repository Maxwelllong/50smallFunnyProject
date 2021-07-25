const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const inp = document.querySelector('.input')

let flag = true;
btn.addEventListener('click',function(){
    if(flag){
        search.classList.add('active')
        flag = false;
    }else{
        search.classList.remove('active')
    }
    
})