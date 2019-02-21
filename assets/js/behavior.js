document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, {
    onOpenEnd() {
      document.getElementById('search-box').focus();
    }
  });
});

// $(document).ready(function(){
//   $('.tabs').tabs();
// });

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

// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.btn-floating');
//   var instances = M.Pushpin.init(elems, {
//   });
// });