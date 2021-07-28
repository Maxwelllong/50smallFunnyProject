const inner = document.getElementsByClassName('container')
console.log(inner);
window.addEventListener('keydown',page)

page(Event)

function page(event){
    inner.innerHTML = `
    <div class='key'>
        ${event.key === '' ? 'space' : event.key}
        <span>event.keyCode</span>
    </div>

    `
} 