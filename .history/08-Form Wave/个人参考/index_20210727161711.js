const labels= document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    console.log(label.innerText
    .split('')
    .map((item,index)=>{
        `<span style="transition-delay:${index *20}mx">${item}</span>`
    })
    .join(''));
   
})