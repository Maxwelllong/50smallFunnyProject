const tags = document.getElementById('textarea')

tags.addEventListener('keyup',function(){
    // console.log(tags.value);
    const tag = document.createElement('span')
    tag.classList.add('tag')
    tag.innerText = tags.value;


})