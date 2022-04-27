// get elements
var toggleButton = document.querySelector('.toggle-button');
var navLinks = document.querySelector('.navlinks');

 toggleButton.addEventListener('click', function(){
     navLinks.classList.toggle('display-nav');
 })