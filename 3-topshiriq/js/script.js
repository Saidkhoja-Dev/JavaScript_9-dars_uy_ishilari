var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");

var newArray = [];

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    
    var inputValue = elInput.value.trim();
    
    var newArray = inputValue.split(" ");
    
    var total = 0;
    
    for (let i = 0; i < newArray.length; i++) {
        total += Number(newArray[i]);
    }
    
    alert(total);    
});




