const inner = document.getElementsByClassName('container')
console.log(inner);
window.addEventListener('keydown',page())

function page(event){
    inner.innerHTML = `
    <div class='key'>
        ${event.key === '' ? 'Space' : event.keycode}
        <span>event.keyCode</span>
    </div>

    `
} 