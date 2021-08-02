const text = document.getElementById('textarea')
const tagEl = document.getElementById('tags')

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    let res = createTags(e.target.value)
    createTags(res);


    
})

function createTags(input){

    const tags = input.split(',').filter(item => item.trim() !== '').map(item => item.trim() )

    tags.innerHTML = ''

    tags.forEach(element => {
        // console.log(element);
        const tag = document.createElement('i')
        tag.classList.add('tag')
        tag.innerText = element
        tagEl.appendChild(tag)
    });


}