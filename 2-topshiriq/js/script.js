var elForm = document.querySelector(".form");
var elInput = document.querySelector(".input");

elForm.addEventListener("submit", function(evt){
    evt.preventDefault();

    var inputValue = elInput.value.trim();

    function wordsRender(text, number){

        var newArray = text.split(" ");
        var longerWords = "";

        for (let i = 0; i < newArray.length; i++) {

            if (newArray[i].length > longerWords.length){
                 longerWords = newArray[i];
            }
        }
    
        return longerWords;
    }

    var arrayOfWords = wordsRender(inputValue);

    console.log(arrayOfWords);
    alert(`Kiritilgan matndagi eng uzun so'z = > ${arrayOfWords}`);
});

