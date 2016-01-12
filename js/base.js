// JavaScript Document
$(function (){	
	
	//控制导航与滚动距离的关系
	var scrollTop;
	;(function (){
		/*var oBanner=document.getElementById('banner');*/
		var oHome=document.getElementById('home');
		var clientHeight=document.documentElement.clientHeight;
		oHome.style.height=clientHeight+'px';
		var oHeader=document.getElementById('header');
		var oLogo=document.getElementById('img_logo');
		var oNav=document.getElementById('nav');
		var aA=oNav.getElementsByTagName('a');
		/*var home_top=oBanner.offsetHeight; *///改了
		var about_top=document.getElementById('about').offsetTop;
		var works_top=document.getElementById('works').offsetTop;
		var contact_top=document.getElementById('contact').offsetTop;
		var oBtn=document.getElementById('btn');
		window.onscroll=function (){
			scrollTop=document.body.scrollTop || document.documentElement.scrollTop;
			if(clientHeight-140<scrollTop) //修改了
			{
				oHeader.className='show header';
				oLogo.style.zIndex=-1;
				$('.show').stop().animate({'top':'0'},800);		
			}
			else
			{
				oHeader.className='old_name header';
				oLogo.style.zIndex='';
				oHeader.style.top='-140px';
		
			}
			
			if(scrollTop < 110)
			{
				oHeader.style.top='0';	
			}
			
			for(var i=0; i<aA.length; i++)
			{
				aA[i].className='';	
			}
			if(scrollTop<clientHeight-140)
			{
				aA[0].className='active';	
			}
			else if(about_top-140<=scrollTop &&scrollTop< works_top-140)
			{
				aA[1].className='active';
					
			}
			else if(works_top-140<=scrollTop &&scrollTop<contact_top-140)
			{
				aA[2].className='active';
				doMove(oBtn,{'opacity':1},{duration :1000});
			}
			else if(contact_top-140<=scrollTop &&scrollTop<document.body.offsetHeight)
			{
				aA[3].className='active';	
			}

			title('con_title');
			title('title');
			title_work('btn_all');	
			function title(sName)
			{
				var obj=document.getElementById(sName);
				var oSpan=obj.children[0];
				if(getPos(obj).top<scrollTop+clientHeight)
				{
					doMove(oSpan,{'top':'0'},{ duration:1500,easing:Tween.Bounce.easeOut});	
				}	
			}
			function title_work(sName)
			{
				var obj=document.getElementById(sName);
				var oSpan=obj.children[0];
				if(getPos(obj).top<scrollTop+clientHeight)
				{
					doMove(oSpan,{'top':'0'},{ duration:1500,easing:Tween.Bounce.easeOut});	
				}	
			}
			
			//about me 效果
			var oInfo=document.getElementById('info');
			var oSkill=document.getElementById('skill');
			var oAboutMe=document.getElementById('aboutme');
			if(getPos(oAboutMe).top/*-340*/<scrollTop+clientHeight)
			{
				doMove(oInfo,{'left':'20'},{easing:Tween.Bounce.easeOut,duration:1200});	
				doMove(oSkill,{'right':'20'},{easing:Tween.Bounce.easeOut,duration:1200});	
			}	
		};
	})();
	
	//导航条
	(function (){
		$('.old_name').stop().animate({'top':'0'},1000);
		$('.old_name .logo').stop().animate({'left':'54px'},2000);
		$('.old_name .nav').stop().animate({'right':'20px'},2000);
		
		//点击给锚点
		var arr=['#btn_home','#btn_about','#btn_works','#btn_contact'];
		var arr1=['#home','#about','#works','#contact'];
		for(var i=0; i<arr.length; i++)
		{
			control(arr[i],arr1[i]);	
		}
		function control(btn_id,con_id){
			$(btn_id).click(function (){
				var about_top=$(con_id).offset().top-75;
				$(document.body).stop().animate({'scrollTop':about_top},1000);
				$(document.documentElement).stop().animate({'scrollTop':about_top},1000);		
			});	
		}
		
		//点击到关于我的页面
		$('#down').click(function (){
			var about_top=$('#about').offset().top;
			$(document.body).stop().animate({'scrollTop':about_top-70},1000);
			$(document.documentElement).stop().animate({'scrollTop':about_top},1000);		
		});
		
		//首页大背景图的切换
		var n=0;
		var timer=setInterval(next,2000);
		$('.prev').mouseover(function (){
			clearInterval(timer);
		});
		$('.prev').mouseout(function (){
			timer=setInterval(next,2000)
		});
		$('.next').mouseover(function (){
			clearInterval(timer);
		});
		$('.next').mouseout(function (){
			timer=setInterval(next,2000)
		});
		$('.prev').click(function (){
			next();
		});
		$('.next').click(function (){
			next();
		});
		function next(){
			n++;		
			$('.banner_top li').eq(n%2).stop().animate({'opacity':0},'slow');
			$('.banner_top li').eq(n%2-1).stop().animate({'opacity':1},'slow');	
		}
		
		//导航变色
		$('.nav a').click(function (){
			$('.nav a').removeClass('active');
			$(this).addClass('active');	
		});	
	})();
	//work效果
	;(function (){
		var oUl=document.getElementById('all_li');
		var aLi=oUl.getElementsByTagName('li');
		for(var i=0; i<aLi.length; i++){
			enter(aLi[i]);
			leave(aLi[i]);	
		}
		
		//鼠标移入
		function enter(obj)
		{
			obj.onmouseenter=function (ev){
				var oEvent=ev || event;
				var n=getN(obj, oEvent);
				var oSpan=obj.getElementsByTagName('span')[0];
				switch (n)
				{
					case 0: // right
						oSpan.style.left='364px';
						oSpan.style.top=0;
						break;
						
					case 1: // bottom
						oSpan.style.left=0;
						oSpan.style.top='265px';
						break;
					
					case 2: // left
						oSpan.style.left='-364px';
						oSpan.style.top=0;
						break;
						
					case 3: // top
						oSpan.style.left=0;
						oSpan.style.top='-265px';
						break;
				}
				doMove(oSpan, {top:0, left:0});
			};
		}
		
		//鼠标移出
		function leave(obj)
		{
			obj.onmouseleave=function (ev){
				var oEvent=ev || event;
				var n=getN(obj, oEvent);
				var oSpan=obj.getElementsByTagName('span')[0];
				
				switch (n)
				{
					case 0: // right
						doMove(oSpan, {left:364, top:0});
						break;
						
					case 1: // bottom
						doMove(oSpan, {top:246, left:0});
						break;
					
					case 2: // left
						doMove(oSpan, {top:0, left:-364});
						break;
						
					case 3: // top
						doMove(oSpan, {top:-246, left:0});
						break;
				}
			};
		}
		
		//角度转换
		function d2a(d)
		{
			return d*180/Math.PI;
		}
		 
		function getN(obj, ev)
		{
			var x=getPos(obj).left+obj.offsetWidth/2-ev.clientX;
			var y=getPos(obj).top+obj.offsetHeight/2-ev.clientY-scrollTop;
			
			var n=Math.round((d2a(Math.atan2(y, x))+180)/90)%4;
			return n;
		}
		
		
		//照片墙
		var zIndex=1;
		
		// 布局转换
		var aPos=[];
		for (var i=0; i<aLi.length; i++)
		{
			aPos.push({
				left:aLi[i].offsetLeft,
				top:aLi[i].offsetTop
			});
		}
		
		for (var i=0; i<aLi.length; i++)
		{
			aLi[i].index=i;
			aLi[i].style.position='absolute';
			aLi[i].style.left=aPos[i].left+'px';
			aLi[i].style.top=aPos[i].top+'px';
			aLi[i].style.margin='0';
		}
		
		//随机
		var oBtn=document.getElementById('btn');
		var bFlag=true;
		var bHref=false;
		oBtn.onmouseover=function (){
			oBtn.style.color='#ccc';	
		};
		oBtn.onmouseout=function (){
			oBtn.style.color='#fff';	
		};
		oBtn.onclick=function (){
			if(!bFlag)return;
			bFlag=false;
			aPos.sort(function (){
				return Math.random()-0.5;
			});
			
			for (var i=0; i<aLi.length; i++)
			{
				doMove(aLi[i], aPos[aLi[i].index],{easing:Tween.Bounce.easeOut,duration :1000,complete:function (){
					bFlag=true;	
				}});
			}	
		};
		oBtn.onselectstart=function (){
			return false;	
		};
		
		// 拖拽
		for (var i=0; i<aLi.length; i++)
		{	
			drag(aLi[i]);
			aLi[i].getElementsByTagName('a')[0].onclick=function (){
				bHref = false;	
			}
		}
		//拖拽函数
		function drag(obj)
		{
			//存href的初始值
			var _href = obj.getElementsByTagName('a')[0].href;
			obj.onmousedown=function (ev){
				obj.style.zIndex=zIndex+=2;
				var oEvent=ev || event;
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				
				document.onmousemove=function (ev){
					var oEvent=ev || event;
					var left=oEvent.clientX-disX;
					var top=oEvent.clientY-disY;
					//移动时禁止点击页面
					bHref = true;
					obj.getElementsByTagName('a')[0].removeAttribute('href');
					obj.style.left=left+'px';
					obj.style.top=top+'px';
				};
				
				document.onmouseup=function (){
					document.onmousemove=null;
					document.onmouseup=null;
					
					obj.releaseCapture && obj.releaseCapture();
					
					// 换位置
					if(!bHref){
						obj.getElementsByTagName('a')[0].href = _href;	
					}
					var oNear=findNear(obj);
					if (oNear)
					{
						oNear.style.zIndex=parseInt(getStyle(obj,'z-index'))-1;
						doMove(obj, aPos[oNear.index], {
							duration:700,
							easing:Tween.Bounce.easeOut
						});
						doMove(oNear, aPos[obj.index], {
							duration:700,
							easing:Tween.Bounce.easeOut
						});
						// 换下标
						var tmp=obj.index;
						obj.index=oNear.index;
						oNear.index=tmp;
					}
					else
					{
						doMove(obj, aPos[obj.index], {
							duration:700,
							easing:Tween.Bounce.easeOut
						});
					}
					
				};
				
				obj.setCapture && obj.setCapture();
				return false;
			};
		}
		
		function findNear(obj)
		{
			var nMin=999999;
			var nMinIndex=-1;
			
			for (var i=0; i<aLi.length; i++)
			{
				if(obj != aLi[i])
				{
					if (collTest(obj, aLi[i]))
					{
						// 碰上了
						var dis=getDis(obj,  aLi[i]);
						if (nMin > dis)
						{
							nMin=dis;
							nMinIndex=i;
						}
					}
				}
			}
			
			if (nMinIndex == -1)
			{
				return null;
			}
			else
			{
				return aLi[nMinIndex];
			}
			
		}
		//碰撞检测
		function collTest(obj1, obj2)
		{
			var l1=obj1.offsetLeft;
			var r1=l1+obj1.offsetWidth;
			var t1=obj1.offsetTop;
			var b1=t1+obj1.offsetHeight;
			
			var l2=obj2.offsetLeft;
			var r2=l2+obj2.offsetWidth;
			var t2=obj2.offsetTop;
			var b2=t2+obj2.offsetHeight;
			
			if (l2>r1 || l1>r2 || t1>b2 || t2>b1)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		
		// getDis 计算两个物体之间距离
		function getDis(obj1, obj2)
		{
			var a=obj1.offsetLeft+obj1.offsetWidth/2-(obj2.offsetLeft+obj2.offsetWidth/2);
			
			var b=obj1.offsetTop+obj1.offsetHeight/2-(obj2.offsetTop+obj2.offsetHeight/2);
			
			return Math.sqrt(a*a+b*b);
		}	
	})();
	
	//联系我
   ;(function (){
		var oSend=document.getElementById('send_btn');
		var oType=document.getElementById('type');
		var aInp=getByClass(oSend.parentNode,'input');
		var oDiv=document.getElementById('tab');
		var aSpan=oSend.parentNode.getElementsByTagName('span');
		var aB=oSend.parentNode.getElementsByTagName('b');
		var oInp=document.getElementById('msg');
		var reg={
			cnName:/^[\u4e00-\u9fa5]{2,4}$/,
			email:/^\w+@[a-z0-9-]+(\.[a-z]{2,6}){1,2}$/,
			password:/^\w{6,12}$/,
			massage:/^[\u4e00-\u9fa5][a-z0-9]+$/	
		};
		function cheak(obj,reg)
		{
			if(obj.value)
			{
				if(reg.test(obj.value))
				{
					obj.parentNode.parentNode.children[0].innerHTML='';	
				}
				else
				{
					obj.parentNode.parentNode.children[0].innerHTML=obj.getAttribute('err_tip');
					oDiv.style.display='none';
				}	
			}
			else
			{
				obj.parentNode.parentNode.children[0].innerHTML='*内容不能为空';
			}	
		}
		oSend.onclick=function (){
			for(var i=0; i<aInp.length; i++)
			{
				if(reg[aInp[i].name])
				{
					cheak(aInp[i],reg[aInp[i].name])
					if(aSpan[0].innerHTML=='' && aSpan[1].innerHTML=='' && aSpan[2].innerHTML=='' && aSpan[3].innerHTML=='')
					{
						oDiv.style.display='block';	
					}
					else
					{
						oDiv.style.display='none';		
					}
				}	
			}				
		};
		for(var i=0; i<aB.length; i++){
			aB[i].index=i;
			aB[i].onclick=function (){
				this.style.display='none';
				aInp[this.index].focus();
			}
		}
		for(var i=0; i<aB.length; i++){
			aInp[i].index=i;
			aInp[i].onfocus=function (){
				aB[this.index].style.display='none';
			};
		}
		for(var i=0; i<aB.length; i++){
			aInp[i].index=i;	
			aInp[i].onblur=function (){
				if (!aInp[this.index].value)
				{
					aB[this.index].style.display='block';
				}
			};
		}
		//getByClass
		function getByClass(oParent,sClass){
			if(oParent.getElementsByClassName){
				return oParent.getElementsByClassName(sClass);
			}else{
				var arr=[];
				var reg=new RegExp('\\b'+sClass+'\\b');
				var aEle=oParent.getElementsByTagName('*');
				for(var i=0; i<aEle.length; i++){
					if(reg.test(aEle[i].className)){
						arr.push(aEle[i]);
					}
				}
				return arr;
			}
		}	
	})();
	
	//返回顶部
	;(function (){
		var oDiv=document.getElementById('back');
		var timer=null;
		oDiv.onmouseover=function (){
			oDiv.style.color='red';	
			oDiv.style.borderColor='red';
		};
		
		oDiv.onmouseout=function (){
			oDiv.style.color='';	
			oDiv.style.borderColor='';
		};
		
		oDiv.onclick=function (){
			moveScroll(0, 2000);
		};
		
		var userScroll=false;
		var backTop=window.onscroll;
		if(typeof backTop == 'function')
		{
			window.onscroll=function (){
				backTop.call(this);
				if (userScroll)
				{
					// 用户滚动了
					clearInterval(timer);
				}
				userScroll=true;
				if(scrollTop <=400)
				{
					oDiv.style.display='none';	
				}
				else
				{
					oDiv.style.display='block';	
				}
			};	
		}
		
		
		function moveScroll(target, time)
		{
			var start=document.documentElement.scrollTop || document.body.scrollTop;
			var dis=target-start;
			var count=Math.floor(time/30);
			var n=0;
			
			clearInterval(timer);
			timer=setInterval(function (){
				userScroll=false;
				n++;	
				var cur=start+dis*n/count;
				// 先
				document.body.scrollTop=cur;
				document.documentElement.scrollTop=cur;
				
				if (n == count)
				{
					clearInterval(timer);
				}
			}, 30);
		}	
	})();
	
	//公用函数
	/*
	 * 获取一个元素到页面的距离
	 */
	function getPos(obj)
	{
		var left=0;
		var top=0;
		while(obj)
		{
			left+=obj.offsetLeft;
			top+=obj.offsetTop;
			obj=obj.offsetParent;	
		}
		return {left:left,top:top};	
	}	
	document.body.scrollTop=0;
	document.documentElement.scrollTop=0;
	
});