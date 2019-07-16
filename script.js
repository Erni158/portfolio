function openNav(){
    document.getElementById("mySidenav").style.width = "180px";
}

function closeNav(){
    document.getElementById("mySidenav").style.width = "0";
}

function openContent(){	
		setTimeout(function(){
			document.getElementById("content").style.width = "50%";
			},180);
		setTimeout(function(){
			document.getElementById("content").style.height = "120px";
			document.getElementById("initials").style.opacity = "1";
		},1000);
}

function slide(){
	var inscription = document.getElementsByClassName("inscription");
	var delay = 100;
	for(var i = 0; i < inscription.length; i++){
		inscription[i].style = "left: 0";
		inscription[i].style.transition = delay+"ms";
		delay+=300;
	}
}

function slide2(){
	var inscription = document.getElementsByClassName("inscription");
	var delay = 0;

	for(var i = 0; i < inscription.length; i++)
	{
		inscription[i].style.left = "-80px";
		inscription[i].style.transition = delay + "ms";
		delay+=300;
	}
}

var block = document.getElementsByClassName("block");
block[0].onmouseover = slide;
block[1].onmouseover = slide;
block[2].onmouseover = slide;
block[3].onmouseover = slide;
block[4].onmouseover = slide;
block[5].onmouseover = slide;

block[0].onmouseout = slide2;
block[1].onmouseout = slide2;
block[2].onmouseout = slide2;
block[3].onmouseout = slide2;
block[4].onmouseout = slide2;
block[5].onmouseout = slide2;


/*function slide(){
	var block = document.getElementsByClassName("block");
	var inscription = document.getElementsByClassName("inscription");
	
	inscription[0].style.marginRight = "50px";		
}*/