/**
  __                __
  \_\      /\      / /
    _     /  \    / /
    \ \  / /\ \  / /
     \ \/ /  \ \/ /
      \  /    \  /
       \/      \/

  Written with <3 by @_iest
 */

// Night mode 8pm to 8am
var now = new Date().getHours();
if (now >= 20 || now < 8) {
  document.querySelector('body').className += ' night-mode';
}

// Scrolly nav thing
var $nav = document.querySelector("nav"),
  navHeight, lastScrollTop, navTranslate, isFloating;

function scrolledDown(amount) {
  if (navTranslate < navHeight) {
    navTranslate = navTranslate + amount;
  } else {
    navTranslate = navHeight;
  }
}

function scrolledUp(amount) {
  if (navTranslate > 0) {
    navTranslate = navTranslate - amount;
    if (navTranslate < 0) {
      navTranslate = 0;
    }
  } else {
    navTranslate = 0;
  }
}

function didScroll() {
  var st = window.scrollY;
  var totalHeight = document.documentElement.offsetHeight;

  if (st > navHeight && !isFloating) {
    isFloating = true;
    $nav.classList.add('is-floating');
  } else if (st < 30) {
    isFloating = false;
    $nav.classList.remove('is-floating');
  }

  if (st < 0) return;
  if (st > (totalHeight - window.innerHeight)) return;

  if (st > lastScrollTop) {
    scrolledDown(st - lastScrollTop);
  } else {
    scrolledUp(lastScrollTop - st);
  }

  lastScrollTop = st;

  $nav.style.WebkitTransform = "translateY(" + -navTranslate + "px)";
  $nav.style.MozTransform = "translateY(" + -navTranslate + "px)";
  $nav.style.OTransform = "translateY(" + -navTranslate + "px)";
  $nav.style.msTransform = "translateY(" + -navTranslate + "px)";
}

if ('ontouchstart' in window) {

  // Dirty check for touch-based devices. These often don't send scroll events
  // continuously, so just set the nav to absolute and be done with it
  $nav.style.position = "relative";
  document.documentElement.className += " no-fun-nav";
} else {

  // Otherwise set up the sticky nav
  var navHeight = $nav.offsetHeight;
  var lastScrollTop = window.scrollY;
  var navTranslate = 0;
  var isFloating = false;

  window.addEventListener("resize", function() {
    navHeight = $nav.offsetHeight;
    didScroll();
  });

  window.addEventListener("scroll", didScroll);
}

// Syntax highlighting
var codes = document.querySelectorAll('pre>code');
for (var i = 0; i < codes.length; i++) {
  codes[i].classList.add('prettyprint');
}
prettyPrint();

// Molten leading
moltenLeading("article h1", {
  minline: 1.1,
  maxline: 1.5,
});
moltenLeading("article h2", {
  minline: 1.4,
  maxline: 1.8,
});
moltenLeading("article p", {
  minline: 1.3,
  maxline: 1.7,
});