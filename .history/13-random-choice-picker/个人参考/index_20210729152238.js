const text = document.getElementById('textarea')
const tags = document.getElementById('tags')

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    getTags(e.target.value)
    
})

function getTags(input){

    const tags = input.split(',').finter(item=>{
        return item.trim() !== ''
    })
    .map()
}