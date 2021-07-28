 const container = document.querySelector('.container')
 window.addEventListener('keydown',general)
    
 general(Event)

 function general(event){
    // console.log(event.key);
    // console.log(event.keyCode);
    // console.log(event.code);
    container.innerHTML = `
        <div class='key'>
            <small>event.key</small>
            ${event.key === '' ? 'space': event.key}
        </div>
        <div class='key'>
            <small>event.keyCode</small>
            ${event.keyCode}
        </div>
        <div class='key'>
            <small>event.code</small>
            ${event.code}
        </div>
    `
 }