const textarea = document.getElementById('textarea')
const tags = docuq.getElementById('tags')
tags.addEventListener('keyup',function(){
    // console.log(tags.value);
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = tags.value;


})