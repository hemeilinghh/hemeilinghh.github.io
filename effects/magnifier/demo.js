// JavaScript Document
window.onload=function (){
	var oDiv=document.getElementById('box');
	var oSmall=document.getElementById('small_div');
	var oBig=document.getElementById('big_div');
	var oMove=document.getElementById('move_span');	
	var oMark=document.getElementById('mark');
	var oImg=oBig.getElementsByTagName('img')[0];
	oMark.onmouseover=function (){
		oMove.style.display='block';
		oBig.style.display='block';	
	};
	oMark.onmouseout=function (){
		oMove.style.display='none';
		oBig.style.display='none';	
	};
	oMark.onmousemove=function (ev){
		var oEvent=ev || event;
		var left=oEvent.clientX-oDiv.offsetLeft-oSmall.offsetLeft-oMove.offsetWidth/2;
		var top=oEvent.clientY-oDiv.offsetTop-oSmall.offsetTop-oMove.offsetHeight/2;
		if(left < 0)
		{
			left=0;	
		}
		else if( left > oSmall.offsetWidth-oMove.offsetWidth)
		{
			left=oSmall.offsetWidth-oMove.offsetWidth;	
		}
		if(top < 0)
		{
			top=0;	
		}
		else if( top > oSmall.offsetHeight-oMove.offsetHeight)
		{
			top=oSmall.offsetHeight-oMove.offsetHeight;	
		}
		
		oMove.style.left=left+'px';	
		
		oMove.style.top=top+'px';
		
		var percentX=left/(oSmall.offsetWidth-oMove.offsetWidth);
        var percentY=top/(oSmall.offsetHeight-oMove.offsetHeight);

        oImg.style.left=-percentX*(oImg.offsetWidth-oBig.offsetWidth)+'px';
        oImg.style.top=-percentY*(oImg.offsetHeight-oBig.offsetHeight)+'px';
	};
};