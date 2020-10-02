// 轮播图
$(function(){
    var index=0;
	//改变图片
	function ChangeImg() {
	    index++;
	    var a= $(".img-slide")
	    if(index>=a.length) index=0;
	    for(var i=0;i<a.length;i++){
	        a[i].style.display='none';
	    }
	    a[index].style.display='block';
    }
    setInterval(ChangeImg,2000);

    var $change = $(".nav_position>span>button");
    $change.on("click",()=>{
        //获取main元素
        var $main = $(".main");
        // alert("success");
        // 修改背景颜色
        $main.css("background-color","black");
    });
});