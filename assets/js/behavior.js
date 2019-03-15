document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    onOpenEnd() {
      document.getElementById('search-box').focus();
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar-mobile").style.top = "0";
  } else {
    document.getElementById("navbar-mobile").style.top = "-57px";
  }
  prevScrollpos = currentScrollPos;
}

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.dropdown-trigger');
  var instances = M.Dropdown.init(elems, {
    coverTrigger: false
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.collapsible');
  var instances = M.Collapsible.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var footerHeight = document.getElementById('footer').clientHeight;
  var fab = document.getElementById('fab');
  var limit = document.body.clientHeight - window.innerHeight - footerHeight;

  if(fab) {
    document.addEventListener('scroll', function() {
      if(window.pageYOffset >= limit) {
        fab.setAttribute("style", "bottom:" + (footerHeight + 23) + "px;");
      } else {
        fab.setAttribute("style", "bottom: 23px;");
      }
    });
  }
});

// Compartilhamento no Facebook
function fbShare(url) {
  FB.ui({
    href: url,
    method: 'share',
  }, function(response){});
}

// Compartilhamento usando apenas url
function shareIt(href) {
  window.open(
    href,
    '_blank',
    'left=' + (window.outerWidth / 2 - 250) + ', top=' + (window.outerHeight / 2 - 250) + ', width=500, height=500'
  );
}
