// Get the button, and when the user clicks on it, execute myFunction
document.getElementById("contact-btn").onclick = function() { myFunction() };

//* myFunction toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function myFunction() {
  document.getElementById("contact-list").classList.toggle("show");
}



document.onscroll = function() { switch_contactinfo() };

var div = document.getElementById("contact-list");

function switch_contactinfo() {
  if (div.className == 'contact-list show'){
    document.getElementById("contact-list").classList.remove("show");
  }
}


