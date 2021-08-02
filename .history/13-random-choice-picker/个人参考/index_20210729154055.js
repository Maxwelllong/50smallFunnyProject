const text = document.getElementById('textarea')
const tags = document.getElementById('tags')

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    let res = getTagsArr(e.target.value)
    createTags(res);
    
})

function getTagsArr(input){

    const tags = input.split(',').filter(item => {
        return item.trim() !== ''
    })
    .map(item => item.trim() )
    return tags
}

function createTags(items){
    items.forEach(element => {
        // console.log(element);
        const tag = document.createElement('i')
        tag.classList.add('tag')
        tag.innerText = element
        tags.appendChild('tag')
    });
}