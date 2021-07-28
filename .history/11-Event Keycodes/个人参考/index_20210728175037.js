 const container = document.querySelector('.container')
 window.addEventListener('keydown',general)
    
 general(Event)

 function general(event){
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.code);
    container.innerHTML = `
        <div class='key'>
            ${event.key}
            <small>event.key</small>
        </div>
    `
 }