
const text = document.querySelector('.text');
const btn = document.getElementsByTagName('button')

btn.addEventListener('click',general)

general()

async function general() {
    const config = {
        headers : {
            Accept:'application/json'
        }
    },
    const res = await fetch('http://icanhazdadjoke.com', config)
    console.log(res);
    const data = await res.json()
    console.log(data);
}