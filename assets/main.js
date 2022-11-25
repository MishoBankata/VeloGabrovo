window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    let mybutton = document.getElementById("stt");
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				mybutton.style.display = "block";
  			} else {
				mybutton.style.display = "none";
  			}
		}
		
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

function show() {
            document.getElementById('image')
                    .style.display = "block";
 
            document.getElementById('btnID')
                    .style.display = "none";
        }

function scrollIntoImage(id) {
    switch(id.toString()) {
        case 'toImage1':
             document.getElementById("image1").scrollIntoView();
             window.scrollTo(0, window.scrollY-150);
             break;
        case 'toImage2':
             document.getElementById("image2").scrollIntoView();
             break;
        case 'toImage3':
             document.getElementById("image3").scrollIntoView();
             break;
        case 'toImage4':
             document.getElementById("image4").scrollIntoView();
             break;
        case 'toImage5':
             document.getElementById("image5").scrollIntoView();
             break;
        default:
            document.getElementById('image6').scrollIntoView();  
    }
}