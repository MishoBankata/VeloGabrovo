window.onscroll = function() {scrollFunction()};

function scrollFunction() {

    const buttons = document.querySelectorAll(`[id^="stt"]`);
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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
		
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function show() {
    document.getElementById('image').style.display = "block";
    document.getElementById('btnID').style.display = "none";
}

function scrollIntoImage(id) {
    switch(id.toString()) {
        case 'toImage1':
        case 'stt1':
             //document.getElementById("image1").scrollIntoView();
	     window.scrollTo(0, 580);
             break;
        case 'toImage2':
        case 'stt2':
             //document.getElementById("image2").scrollIntoView();
	     window.scrollTo(0, 580+630);
             break;
        case 'toImage3':
        case 'stt3':
             //document.getElementById("image3").scrollIntoView();
	     window.scrollTo(0, 580+630*2);
             break;
        case 'toImage4':
        case 'stt4':
             //document.getElementById("image4").scrollIntoView();
	     window.scrollTo(0, 580+630*3);
             break;
        case 'toImage5':
        case 'stt5':
             //document.getElementById("image5").scrollIntoView();
	     window.scrollTo(0, 580+630*4);
             break;
        default:
            //document.getElementById('image6').scrollIntoView();
	    window.scrollTo(0, 580+630*5);  
    }
}