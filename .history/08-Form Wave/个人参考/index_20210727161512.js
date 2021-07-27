const labels= document.querySelectorAll('.form-control label')

labels.forEach(label =>{
    console.log(label.innerText.split('').map((item,index)=>{
        `<span delay=${index * 30 }ms>${item}</span>`
    }).join(''));
   
})