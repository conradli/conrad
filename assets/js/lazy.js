/* Credit: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/

** I modified to remove jQuery -> only JS ** 
** I assume it works properly but I am not a JS/JQuery expert **
*/

document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
    lazyloadImages = document.querySelectorAll(".image-img.lazy");
    console.log(lazyloadImages);
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".image-img.lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      }, {
        root: document.querySelector("#image-gallery"),
        rootMargin: "0px 0px 500px 0px"
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else { 
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".image-img.lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
            var scrollTop = window.scrollTop;
            lazyloadImages.forEach(function(image) {
                var el = image;
                if(el.offset().top < window.innerHeight + scrollTop + 500) {

                  var url = el.attr("data-src");
                  el.attr("src", url);
                  el.removeClass("lazy");
                  lazyloadImages = document.querySelectorAll(".image-img.lazy");
                }
            });
            if(lazyloadImages.length == 0) { 
              document.removeEventListener("scroll", lazyload);
              window.removeEventListener("resize", lazyload);
            }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
    }
  })