const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound =>{
    // 1.创建button元素
    const btn = document.createElement('button')
    // 2.添加样式属性
    btn.classList.add('btn')
    // 3.绑定点击事件
    btn.addEventListener('click',function(){
        // 3.1 停止播放
        stopSound();
    })
    function stopSound(){
        
    }

})