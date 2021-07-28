
const text = document.querySelector('.text');
const btn = document.getElementsByTagName('button')

btn.addEventListener('click', function () {
    const config = {
        'headers' : {
            Accept:'application/json'
        }
    },
    const res = await fetch('http://icanhazdadjoke.com', config)
    console.log(res);
})
