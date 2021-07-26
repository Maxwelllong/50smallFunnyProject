const lis = document.querySelectorAll('li')

window.addEventListener('scroll',show)

const winHeight = window.innerHeight * 4 / 5 

function show(){
    lis.forEach(item => {
        let liTop = item.getBoundingClientRect().top;
        console.log(liTop);
    })
}
