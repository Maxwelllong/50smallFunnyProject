
const text = document.querySelector('.text');
const btn = document.getElementsByTagName('button')

btn.addEventListener('click', function () {
    const config = {
        'headers' : {
            Accept:'application/json'
        }
    },
})

// 封装ajax请求

function ajaxs(method,site,flag){
    let app = new XMLHttpRequest();
    app.open(method,site,flag)
    app.onreadystatechange
    app.send 
    return app.responseText()
}