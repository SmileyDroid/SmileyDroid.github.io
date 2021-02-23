const toggleButton = document.getElementsByClassName('toggle-button') [0]
const navbarLinks = document.getElementsByClassName('navbar-links') [0]

toggleButton.addEventListener ('click', () => {
    navbarLinks.classList.toggle('active') 
    nav.style.background = "#000000CC";
})

//Get the button
var mybutton = document.getElementById("myBtn");
var nav = document.getElementById('nav');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    nav.style.background = "#000000CC";

  } else {
    mybutton.style.display = "none";
    nav.style.background = "transparent";

  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



        
        //if (window.innerHeight <480){
          //  nav.style.background = "#000000CC"; 

        //}

        //if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          //  nav.style.background = "#000000CC";
           // mybutton.style.display = "block";
        //}

        //else {
          //  nav.style.background = "transparent";
            //mybutton.style.display = "none";
        //}

        //if (screen.width >480 && window.pageYOffset >150){
          //  nav.style.background = "#000000CC";
        //}

        //else {
         //   nav.style.background = "transparent";
       // }
    //}

var myIndex1 = 0; //slideshow1
    carousel1();
                        
    function carousel1() {
        var i;
        var x = document.getElementsByClassName("mySlides1");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex1++;
        if (myIndex1 > x.length) {myIndex1 = 1}    
        x[myIndex1-1].style.display = "block";  
        setTimeout(carousel1, 2000); // Change image every 2 seconds
 }

 var myIndex2 = 0; //slideshow2
    carousel2();
                        
    function carousel2() {
        var i;
        var x = document.getElementsByClassName("mySlides2");
        for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
        }
        myIndex2++;
        if (myIndex2 > x.length) {myIndex2 = 1}    
        x[myIndex2-1].style.display = "block";  
        setTimeout(carousel2, 2000); // Change image every 2 seconds
}

