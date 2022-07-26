const $ = document;

/***************************
 * Display / Hide Navbar
 ***************************/
window.onscroll = function() {
  let currentScrollPosition = window.scrollY;
  let headerOffsetHeight = $.getElementsByTagName("header")[0].offsetHeight;
  let navbar = $.getElementsByTagName("nav")[0];
  let main = $.getElementsByTagName("main")[0];

  if (currentScrollPosition > headerOffsetHeight) {
    // Display fixed navbar on top of the screen
    navbar.classList.add("fixedNav"); // change the style and set position property to fixed
    main.classList.add("fixedNav"); // add navbar height in padding to avoid glitch effect with content below
  } else {
    // Display navbar in header
    navbar.classList.remove("fixedNav"); // remove style and position property
    main.classList.remove("fixedNav"); // remove padding
  }
};


/***************************
 * Toggle Website Appearance
 ***************************/
$.getElementById("appearance").addEventListener("click", function() {
  $.documentElement.classList.toggle('secondaryAppearance');
});


/***************************
 * Language Redirection
 ***************************/
$.getElementById("altLanguageSelect").onchange = function() {
  let selectedOption = this.children[this.selectedIndex];
  let altLanguageFilePath = selectedOption.getAttribute("value");

  window.location.replace(altLanguageFilePath);
};