//MAKES THE SIDE NAVIGATION BAR APPEAR AND DISAPPEAR BASED ON SCROLL POSITION
function scrollFunction() {
    "use strict";
    var buttons = Array.from(document.getElementById("gallerySideNavBar").children);
    
    if (document.body.scrollTop > 124 || document.documentElement.scrollTop > 124) {
        buttons.forEach(button => {
                button.style.display = "block";
             });
    } 

    else {
	   buttons.forEach(button => {
                button.style.display = "none";
         });
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
    switch(buttonContent) {
        case 'Главен маршрут':
            window.scrollTo(0, 574);
            break;
        case 'Централен маршрут':
	        window.scrollTo(0, 574+630);
            break;
        case 'Североизточен маршрут':
	        window.scrollTo(0, 574+630*2);
            break;
        case 'Южен маршрут':
	        window.scrollTo(0, 574+630*3);
            break;
        case 'Северозападен маршрут':
	        window.scrollTo(0, 574+630*4);
            break;
        case 'Централен парк':
            window.scrollTo(0, 574+630*5);
            break;
        default:
            alert("Error: Button's name not matching image's title.");
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