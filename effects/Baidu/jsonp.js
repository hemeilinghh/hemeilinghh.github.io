// JavaScript Document
function json2url(json)
{
	var arr=[];
	for(var name in json)
	{
		arr.push(name+'='+json[name]);	
	}	
	return arr.join('&');
}
function jsonp(json)
{
	json=json || {};
	if(! json.url)return;
	json.date=json.data || {};
	json.cbName=json.cbName || 'cb';
	
	var fnName=('jsonp'+Math.random()).replace('.','');
	window[fnName]=function (data){
		json.success && json.success(data);
		oH.removeChild(oS);	
	};
	json.date[json.cbName]=fnName;
	
	var oS=document.createElement('script');
	oS.src=json.url+'?'+json2url(json.data);
	var oH=document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}



