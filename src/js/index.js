// Responsive navigation bar functionality
function myFunction() {
  let navBar = document.getElementById('myTopnav');

  if (navBar.className === 'topnav') {
    navBar.className += ' responsive';
  } else {
    navBar.className = 'topnav';
  }
}

// Button for scrolling back to the top of page functionality
mybutton = document.getElementById('up-arrow');

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
