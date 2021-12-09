var cookie_box = document.getElementById('cookie_box'),
activeBtn = document.getElementById('activeBtn');

activeBtn.addEventListener('click',function(){
	//UTC is time set by the world time standard
	document.cookie = "CookieBy=van Eck Webdesign; expires=" + new Date(2022,0,1).toUTCString();
	//This cookies expires after 30 days
	document.cookie = "Name=Ralf; max-age=" + 60*60*24*30;
	document.cookie = "LastName=van Eck; max-age=" + 60*60*24*30;
	
	if(document.cookie){
		//Hide the popup box
		cookie_box.classList.add('hide');
	}else{
		//If we block cookie setting then show this massege
		alert("cookies uitgeschakeld! Sta deze site toe vanuit de cookie-instelling van uw browser");
	}

})

function getCookieName(name) {
    var r = document.cookie.match("\\b" + name + "=([^;]*)\\b");
    return r ? r[1] : '';
}
var getCookieName = getCookieName('CookieBy');
//alert(getCookieName)
if(getCookieName === 'van Eck Webdesign'){
	//All time hide the popup box
	cookie_box.classList.add('hide');
}



document.getElementById("menu-bars").addEventListener("click", openMenu);

function openMenu() {

  document.getElementById("dropdown").classList.toggle("active");
};

let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
};

var typed = new Typed('.typing-text', {
    strings : ['front end developer ', 'Al een Website online vanaf €199,99', "Welkom"],
    loop : true,
    typeSpeed : 150
});

VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});