var userSelection = document.getElementsByClassName('menu');

for(var i = 0; i < userSelection.length; i++) {
  (function(index) {
    userSelection[index].addEventListener("click", function() {
       console.log("Clicked index: " + index);
     })
  })(i);
}