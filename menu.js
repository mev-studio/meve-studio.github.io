var menuButton = document.getElementById("menuButton");
var menuOpened = false;

var toggleMenu = function() {
  var menu = document.getElementById("responsiveMenu");
  var main = document.getElementById("main");

  if (menuOpened) {
    menu.classList.replace("opened", "closed");
    main.setAttribute("style", "");
    menuButton.classList.remove("is-active");
  } else {
    menu.classList.replace("closed", "opened");
    main.setAttribute("style", "cursor: pointer");
    menuButton.classList.add("is-active");
  }

  menuOpened = !menuOpened;
};

var closeMenu = function() {
  if (menuOpened) {
    toggleMenu();
  }
};
