document.addEventListener("DOMContentLoaded", function() {
  // Get the "Return" element
  const returnElement = document.querySelector(".Return");
  
  // Add hover effect to the "Return" element
  returnElement.addEventListener("mouseover", function() {
    this.style.textDecoration = "underline";
  });
  
  returnElement.addEventListener("mouseout", function() {
    this.style.textDecoration = "none";
  });
  
  // Get the "Home" element
  const homeElement = document.querySelector(".Home");
  
  // Add hover effect to the "Home" element
  homeElement.addEventListener("mouseover", function() {
    this.style.textDecoration = "underline";
  });
  
  homeElement.addEventListener("mouseout", function() {
    this.style.textDecoration = "none";
  });
});
