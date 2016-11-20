// 导航点击
var nav=document.getElementById('nav');
var ul = nav.getElementsByTagName('ul')[0];
var oLi = ul.getElementsByTagName('li');
for(var i=0;i<oLi.length;i++){
	oLi[i].index = i;
	oLi[i].onmouseup=function(){
		document.getElementById('pro').style.opacity = 0.5;
		for(var j=0;j<oLi.length;j++){
			oLi[j].className='nav-blur';
		}
		this.className='nav-current';
		//ul.webkitTransition = 'all 500ms linear 0s';
		var px = this.index * 50 ,
			time = 300,
			currTop = ul.scrollTop,
			runPx = 0,
			up = px > ul.scrollTop;
		if(px > (ul.scrollHeight - ul.offsetHeight)){
			return false;
		}
		if(up){
			runPx = px - ul.scrollTop;
		}else{
			runPx = ul.scrollTop - px;
		}
		var timer = setInterval(function(){
			if(up){
				ul.scrollTop = ul.scrollTop + runPx/30;
				if(px < ul.scrollTop){
					clearInterval(timer);
					document.getElementById('pro').style.opacity = 1;
				}
			}else{
				ul.scrollTop = ul.scrollTop - runPx/30;
				if(px > ul.scrollTop){
					clearInterval(timer);
					document.getElementById('pro').style.opacity = 1;
				}
			}
		},10);
	}
}