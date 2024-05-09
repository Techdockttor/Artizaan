document.addEventListener("DOMContentLoaded", function() {
  // Get all elements with class starting with "frame-" and add hover effect
  const frameElements = document.querySelectorAll("[class^='frame-']");
  
  frameElements.forEach(function(element) {
    element.addEventListener("mouseover", function() {
      this.style.transform = "scale(1.05)";
    });
    
    element.addEventListener("mouseout", function() {
      this.style.transform = "scale(1)";
    });
  });
});
