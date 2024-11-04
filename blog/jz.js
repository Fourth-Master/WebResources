/* 禁止调试 */
        setInterval(function() {
            var startTime = performance.now();
            debugger; 
            var endTime = performance.now();
            if (endTime - startTime > 100) {
                window.location.href = 'about:blank';
            } 
        }, 100);
/* 禁用F12按键并提醒 */
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {/*F12*/
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！Bingo~",
                    message:"老弟，试试 Alt+Shift+Fn+F4",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
if (window.event && window.event.keyCode == 73 && window.event.ctrlKey && window.event.shiftKey) {/*ctrl+shift+i*/
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！Bingo~",
                    message:"老弟，试试 Alt+Shift+Fn+F4",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
};
/* 禁用右键菜单并提醒 */
document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"嘿！没有右键菜单",
            message:"复制请用键盘快捷键",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})
return false;
}
/* 复制提醒 */
document.addEventListener("copy",function(e){
    new Vue({
        data:function(){
            this.$notify({
                title:"嘿！复制成功",
                message:"若要转载请务必保留四爷手札原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"success"
            });
            return{visible:false}
        }
    })
})
