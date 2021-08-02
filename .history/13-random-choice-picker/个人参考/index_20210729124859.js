const textarea = document.getElementById('textarea')
const tags = document.getElementById('tags')


textarea.addEventListener('keyup',function(e){
    // createTags(e.target.value)
    console.log(e.target.value);


})

function createTags(input){
    const tags = input.split(',').filter(tag =>{
        tag.trim() !== ''
    }).map(tag => tag.trim)
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = input.value;


    tags.appendChild(tag)
}