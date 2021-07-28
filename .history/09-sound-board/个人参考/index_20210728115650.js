const sounds=['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// 遍历sounds

sounds.forEach((sound)=>{
    // 1. 创建button按钮
    const btn = document.createElement('button')
    // 2. 给每个button添加样式 onBtn
    btn.classList.add('onBtn')
    // 3. 给每个button添加文字内容
    btn.innerText = sound 
    // 4. 给button绑定点击事件
    btn.addEventListener('click',function(){
        
    })
})