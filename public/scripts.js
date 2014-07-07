var now = new Date().getHours();

if (now >= 20 || now < 8) {
  document.querySelector('body').classList.add('night-mode');
}

var $ = function(selector) {
  return document.querySelector(selector);
};

var $nav = $("nav");

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
  } else {
    navTranslate = 0;
  }
}

// Dirty check for touch-based devices. These often don't send scroll events
// continuously, so just set the nav to absolute and be done with it
if ('ontouchstart' in window) {
  $nav.style.position = "relative";
} else {
  var navHeight = $nav.offsetHeight;

  var lastScrollTop = window.scrollY;
  var navTranslate = 0;

  window.addEventListener("scroll", function() {
    var st = window.scrollY;

    if (st < 0) return;

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
  });
}

var codes = document.querySelectorAll('pre>code');
for (var i = 0; i < codes.length; i++) {
  codes[i].classList.add('prettyprint');
}
prettyPrint();