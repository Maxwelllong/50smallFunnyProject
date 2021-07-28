
const text = document.querySelector('.text');
const btn = document.getElementsByTagName('button')

btn.addEventListener('click', function () {
    const config = {
        'headers' : {
            Accept:'application/json'
        }
    },
    const app = new XMLHttpRequest();
    app.open('request','http://icanhazdadjoke.com')
    const status = app.onreadystatechange()
    console.log(status);
})