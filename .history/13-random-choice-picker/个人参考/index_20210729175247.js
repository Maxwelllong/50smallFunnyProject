const tags = document.getElementById('tags')
const text = document.getElementById('textarea')

//给text文本输入框绑定监听事件
text.addEventListener('keyup',function(e){
    // console.log(e.target.value);
    // 创建tags标签
    createTags(e.target.value)

})


// 创建tags标签
function createTags(input){
    const tagsEl = input.split(',').filter(item =>item.trim() !== '').map(item => item.trim())
    // console.log(tags);

    tagsEl.forEach(element => {
        // 1.创建元素
        const tagEl = document.createElement('span')
        // 2.添加样式
        tagEl.classList.add("tags")
        // 3.添加文本内容
        tagEl.innerText = element 
        // 4.挂载元素
        tags.appendChild(tagEl)
    });
   
}