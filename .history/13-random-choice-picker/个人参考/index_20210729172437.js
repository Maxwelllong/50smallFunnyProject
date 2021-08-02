const tags = document.getElementById('tags')
const text = document.getElementById('textarea')

//给text文本输入框绑定监听事件
text.addEventListener('keyup',function(e){
    console.log(e.target.value);
    // 创建tags标签
    createTags(e.target.value)

})


// 创建tags标签
function createTags(input){
    const tags = input.split(',').filter(item =>item.trim() !== '').map(item => item.trim())
    console.log(tags);
}