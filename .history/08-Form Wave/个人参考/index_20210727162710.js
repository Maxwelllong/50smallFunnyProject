const labels= document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    console.log(label.innerText
    .split('')
    .map(
        (letter,index)=>`<span style='transform-delay:${index * 20}ms'>${letter}</span>`
        )
    .join('')
    );
   
})