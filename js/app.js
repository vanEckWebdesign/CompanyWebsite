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

particlesJS('particles-js',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#000000"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#000000",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);



document.getElementById("menu").addEventListener("click", openMenu);

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