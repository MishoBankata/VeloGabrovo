window.onscroll = function() {scrollFunction()};
    
function scrollFunction() {
    let mybutton1 = document.getElementById("stt1");
    let mybutton2 = document.getElementById("stt2");
    let mybutton3 = document.getElementById("stt3");
    let mybutton4 = document.getElementById("stt4");
    let mybutton5 = document.getElementById("stt5");
    let mybutton6 = document.getElementById("stt6");
			if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
				mybutton1.style.display = "block";
                mybutton2.style.display = "block";
                mybutton3.style.display = "block";
                mybutton4.style.display = "block";
                mybutton5.style.display = "block";
                mybutton6.style.display = "block";
  			} else {
				mybutton1.style.display = "none";
                mybutton2.style.display = "none";
                mybutton3.style.display = "none";
                mybutton4.style.display = "none";
                mybutton5.style.display = "none";
                mybutton6.style.display = "none";
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
        case 'stt1':
             document.getElementById("image1").scrollIntoView();
             break;
        case 'toImage2':
        case 'stt2':
             document.getElementById("image2").scrollIntoView();
             break;
        case 'toImage3':
        case 'stt3':
             document.getElementById("image3").scrollIntoView();
             break;
        case 'toImage4':
        case 'stt4':
             document.getElementById("image4").scrollIntoView();
             break;
        case 'toImage5':
        case 'stt5':
             document.getElementById("image5").scrollIntoView();
             break;
        default:
            document.getElementById('image6').scrollIntoView();  
    }
}