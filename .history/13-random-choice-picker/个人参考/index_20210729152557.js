const text = document.getElementById('textarea')
const tags = document.getElementById('tags')

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    let res = getTags(e.target.value)
    console.log(res);
    
})

function getTags(input){

    const tags = input.split(',').filter(item => {
        return item.trim() !== ''
    })
    .map(item => item.trim() )
    return tags
}