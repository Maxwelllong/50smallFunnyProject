const text = document.getElementById('textarea')
const tagEls = document.getElementById('tags')

text.focus();

text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    createTags(e.target.value)
    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value = ''
        },10)
       randomSelect();
    }
})

function createTags(inputs){
    // console.log( inputs);
    const tags = inputs.split(',').filter(item => item.trim() !== '').map(item => item.trim() )
    //清空前一次创建的标签
    tagEls.innerHTML = ''

    tags.forEach(element => {
        // console.log(element);
        const tagEl = document.createElement('i')
        tagEl.classList.add('tag')
        tagEl.innerText = element
        tagEls.appendChild(tagEl)
    });
}

function randomSelect(){
    const times = 30 ;
    var timer = setInterval(()=>{
        
    },100)
}