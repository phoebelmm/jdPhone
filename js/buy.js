// 按钮事件
var jian=document.getElementsByClassName('jian');
var shu=document.getElementsByClassName('shu');
var jia=document.getElementsByClassName('jia');
for(var i=0;i<jia.length;i++){
	jian[i].shu=shu[i];
	jia[i].shu=shu[i];
	jia[i].jian=jian[i];
	jian[i].onclick=function(){
		var n=parseInt(this.shu.innerHTML)
		if(n>1){
			n--;
		}
		if(n==1){
			this.id='jian1';
		}
		this.shu.innerHTML=n;
	};
	jia[i].onclick=function(){
		var n=parseInt(this.shu.innerHTML)
		n++;
		this.shu.innerHTML=n;
		this.jian.id='jian2';
	};
}
