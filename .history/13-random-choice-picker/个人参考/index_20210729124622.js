const textarea = document.getElementById('textarea')
const tags = document.getElementById('tags')


textarea.addEventListener('keyup',function(e){
    createTags(e.target.value)
    console.log(e.target.value);


})

function createTags(){
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = textarea.value;


    tags.appendChild(tag)
}