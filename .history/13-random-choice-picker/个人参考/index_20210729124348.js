const textarea = document.getElementById('textarea')
const tags = document.getElementById('tags')


textarea.addEventListener('keyup',function(){
    // console.log(tags.value);
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = textarea.value;
    tags.appendChild(tag)

})