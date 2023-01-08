//MAKES THE SIDE NAVIGATION BAR APPEAR AND DISAPPEAR BASED ON SCROLL POSITION
function scrollFunction() {
    "use strict";
    /*var buttons = Array.from(document.getElementById("gallerySideNavBar").children);
    
    if (document.body.scrollTop > 124 || document.documentElement.scrollTop > 124) {
        buttons.forEach(button => {
                button.style.display = "block";
             });
    } 

    else {
	   buttons.forEach(button => {
                button.style.display = "none";
         });
    }*/
	
	var topButton = document.getElementById("top");
	
	if (document.body.scrollTop > 256 || document.documentElement.scrollTop > 256) {
				topButton.style.display = "block";
  			} else {
				topButton.style.display = "none";
  			}
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function show() {
    document.getElementById('image').style.display = "block";
    document.getElementById('btnID').style.display = "none";
}

function scrollIntoImage(buttonContent) {
	
	let gm = document.getElementById("gm");
	let cm = document.getElementById("cm");
	let sim = document.getElementById("sim");
	let um = document.getElementById("um");
	let szm = document.getElementById("szm");
	let cp = document.getElementById("cp");
	
	
    switch(buttonContent) {
        case 'Главен маршрут':
            gm.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        case 'Централен маршрут':
	        cm.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        case 'Североизточен маршрут':
	        sim.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        case 'Южен маршрут':
	        um.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        case 'Северозападен маршрут':
	        szm.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        case 'Централен парк':
            cp.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
            break;
        default:
            window.scrollTo(0, 0);
    }
}

function arrangeButtonsPosition() {
    var buttons = Array.from(document.getElementById("gallerySideNavBar").children);
    for (let i=0; i<buttons.length; i++) {
        buttons[i].style.bottom = (240 - 40*i).toString() + "px";
        buttons[i].style.right = "30px";
    }
}

window.onscroll = function() {scrollFunction()};
window.onload = arrangeButtonsPosition();