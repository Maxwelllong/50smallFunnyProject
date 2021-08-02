const text = document.getElementById('textarea')
const tags = document.getElementById('tags')

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    let res = getTagsArr(e.target.value)
    
    
})

function getTagsArr(input){

    const tags = input.split(',').filter(item => {
        return item.trim() !== ''
    })
    .map(item => item.trim() )
    return tags
}

function createTag(tags){
    tags.forEach(element => {
        console.log(element);
    });
}