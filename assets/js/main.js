var metas = document.getElementsByTagName('meta');
var i;
if (navigator.userAgent.match(/iPhone/i)) {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
    }
  }
  document.addEventListener("gesturestart", gestureStart, false);
}
function gestureStart() {
  for (i=0; i<metas.length; i++) {
    if (metas[i].name == "viewport") {
      metas[i].content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";
    }
  }
}


document.getElementById("openNav").addEventListener("click", function(){
  document.body.scrollTop = 0;
  document.getElementById('openNav').className = "fa fa-bars inactive"; 
  //document.getElementsByClassName('layout-content')[0].style.overflow = "hidden";
  openNav();
  document.getElementById('closeNav').className = "fas fa-times active";
});

document.getElementById("closeNav").addEventListener("click", function() {
  document.body.scrollTop = 0;
  document.getElementById('closeNav').className = "fas fa-times inactive";
  //document.getElementsByClassName('layout-content')[0].style.overflow = "scroll";
  document.getElementById('openNav').className = "fa fa-bars active"; 
  closeNav();
});

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}



/* -------------------------------------------------------
Credit: https://dev.to/ananyaneogi/create-a-dark-light-mode-switch-with-css-variables-34l8 
------------------------------------------------------- */

const toggleSwitch = document.querySelectorAll('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark';

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch[0].checked = true;
      toggleSwitch[1].checked = true;

    }
}

function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      toggleSwitch[0].checked = true;
      toggleSwitch[1].checked = true;

      localStorage.setItem('theme', 'dark');
  } else {
      document.documentElement.setAttribute('data-theme', 'light');
      toggleSwitch[0].checked = false;
      toggleSwitch[1].checked = false;

      localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.forEach(function(toggle) {
  toggle.addEventListener('change', switchTheme, false);
});



