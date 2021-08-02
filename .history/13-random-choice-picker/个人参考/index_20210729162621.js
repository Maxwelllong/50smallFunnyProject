const text = document.getElementById('textarea')
const tagEls = document.getElementById('tags')

text.focus();

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    createTags(e.target.value);




    
})

function createTags(inputs){
    console.log( inputs);
    const tags = inputs.split(',').filter(item => item.trim() !== '').map(item => item.trim() )

    tags.innerHTML = ''

    tags.forEach(element => {
        // console.log(element);
        const tagEl = document.createElement('i')
        tagEl.classList.add('tag')
        tagEl.innerText = element
        tagEls.appendChild(tagEl)
    });


}