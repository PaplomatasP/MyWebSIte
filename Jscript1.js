document.getElementById("tab1Content").style.display = "none";
document.getElementById("tab2Content").style.display = "none";
document.getElementById("tab3Content").style.display = "none";
document.getElementById("HOMEContent").style.display = "block";
 
 
document.getElementById("Tab1").addEventListener("click", function() {
 document.getElementById("HOMEContent").style.display = "none";
 document.getElementById("tab2Content").style.display = "none";
 document.getElementById("tab3Content").style.display = "none";
 document.getElementById("tab1Content").style.display = "block";
});

document.getElementById("Tab2").addEventListener("click", function() {
  document.getElementById("tab1Content").style.display = "none";
 document.getElementById("HOMEContent").style.display = "none";
 document.getElementById("tab3Content").style.display = "none";
 document.getElementById("tab2Content").style.display = "block";
});

document.getElementById("HOME").addEventListener("click", function() {
  document.getElementById("tab1Content").style.display = "none";
 document.getElementById("tab2Content").style.display = "none";
 document.getElementById("tab3Content").style.display = "none";
 document.getElementById("HOMEContent").style.display = "block";
});

document.getElementById("Tab3").addEventListener("click", function() {
  document.getElementById("tab1Content").style.display = "none";
 document.getElementById("tab2Content").style.display = "none";
 document.getElementById("tab3Content").style.display = "block";
 document.getElementById("HOMEContent").style.display = "none";
});