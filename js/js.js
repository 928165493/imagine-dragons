function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof window.onload != "function"){
		window.onload = func;
	}else {
		window.onload = function(){
			oldLoad();
			func();
		}
	}
}
function insertAfter (newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else {
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else {
		var newClassName = element.className;
		newClassName += " ";
		newClassName += value;
	}
}
function highLightPage(){
	if(!document.getElementsByTagName)return false;
	var nav = document.getElementsByTagName("nav");
	var alink = document.getElementsByTagName("a");
	for(var i = 0;i < alink.length;i++){
		var alinkUrl = alink[i].getAttribute("href");
		var localUrl = window.location.href;
		if (localUrl.indexOf(alinkUrl)!= -1){
			addClass(alink[i].parentNode,"here");
			alink[i].style.color = "#7d7775";
		}
	}
}
function showParas(){
	if(!document.getElementsByTagName)return false;
	if(!document.getElementById)return false;
	var content = document.getElementsByTagName("article");
	var intro = document.getElementById("introduction");
	var info = document.getElementById("info");
	var exp = document.getElementById("exp");
	if(!intro)return false;
	if(!info)return false;
	if(!exp)return false;
	info.style.display = "none";
	exp.style.display = "none";
	var alink = content[0].getElementsByTagName("a");
	alink[0].onclick = function(){
		intro.style.display = "block";
		info.style.display = "none";
		exp.style.display = "none";
		return false;
	}
	alink[1].onclick = function(){
		intro.style.display = "none";
		info.style.display = "block";
		exp.style.display = "none";
		return false;
	}
	alink[2].onclick = function(){
		intro.style.display = "none";
		info.style.display = "none";
		exp.style.display = "block";
		return false;
	}
}
function moveElement(elementId,final_x,final_y,interval){
	if(!document.getElementById)return false;
	if(!document.getElementsByTagName) return false;
	var elem = document.getElementById(elementId);
	if(elem.movement){
		clearTimeout(elem.movement);
	}
	if(!elem.style.top){
		elem.style.top = "0px"
	}
	if(!elem.style.left){
		elem.style.left = "0px";
	}
	var x = parseInt(elem.style.left);
	var y = parseInt(elem.style.top);
	if(x == final_x&&y == final_y)return true;
	if(x < final_x){
		var dist = Math.ceil((final_x - x)/10);
		x += dist;
	}
	if(y < final_y) {
		var dist = Math.ceil((final_y - y)/10);
		y += dist;
	}
	if( x > final_x) {
		var dist = Math.ceil((x - final_x)/10);
		x -= dist;
	}
	if(y > final_y) {
		var dist = Math.ceil((y - final_y)/10);
		y -= dist;	
	}
	elem.style.left = x + "px";
	elem.style.top = y + "px";
	var repeat = "moveElement('"+elementId+"',"+final_x+","+final_y+","+interval+")";
	elem.movement = setTimeout(repeat,interval);
}
function pepareSlideshow(){
	var content = document.getElementById("photos");
	if(!content)return false;
	var alinks = content.getElementsByTagName("a");
	if(!content)return false;
	alinks[0].onmouseover= function(){
		moveElement("show",0,0,5);
	}
	alinks[0].onclick= function(){
		moveElement("show",0,0,5);
		return false;
	}
	alinks[1].onclick = function(){
		moveElement("show",-600,0,5);
		return false;
	}
	alinks[1].onmouseover = function(){
		moveElement("show",-600,0,5);
	}
	alinks[2].onmouseover = function(){
		moveElement("show",-1200,0,5);
	}
	alinks[2].onclick = function(){
		moveElement("show",-1200,0,5);
		return false;
	}
	alinks[3].onmouseover = function(){
		moveElement("show",-1800,0,5);
	}
	alinks[3].onclick = function(){
		moveElement("show",-1800,0,5);
		return false;
	}
}

function pepareHeadershow(){
	var x = 0;
	setTimeout(go,3000)
	function go(){
		x -= 900;
		moveElement("hedi",x,0,15);
		if(x == -2700){
			x=900
		};
		setTimeout(go,3000);
    }
}
addLoadEvent(highLightPage);
addLoadEvent(showParas);
addLoadEvent(pepareSlideshow);
addLoadEvent(pepareHeadershow);