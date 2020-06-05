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


/*
for (var i = 0; i < document.links.length; i++) {
  if (document.links[i].href == document.URL.href) {
      document.links[i].className = 'active';
  }
  
}
*/

document.getElementById("openNav").addEventListener("click", function(){
  $("body").scrollTop(0);
  document.getElementById('openNav').className = "fa fa-bars inactive"; 
  


  openNav();
  document.getElementById('closeNav').className = "fas fa-times active";


});

document.getElementById("closeNav").addEventListener("click", function() {
  $("body").scrollTop(0);
  document.getElementById('closeNav').className = "fas fa-times inactive";


  document.getElementById('openNav').className = "fa fa-bars active"; 
  closeNav();



});

function openNav() {
  //document.getElementsByClassName("layout-content")[0].style.borderTop = "1px solid #fff";
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";

  //document.getElementsByClassName("layout-content")[0].style.borderTop = "1px solid #e5e5e5";

}

