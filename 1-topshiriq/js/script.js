/*  
var studentOfChilonzor = ["Rustam", "Ulug'bek", "Saidaminxo'ja", "Islom"];
var studentOfChimboy = ["Doniyor", "Sanjar", "Jumatoy"];

for (let i = 0; i < studentOfChimboy.length; i++) {
    studentOfChilonzor.push(studentOfChimboy[i]);
}
console.log(studentOfChilonzor);
*/

// var studentOfChilonzor = ["Rustam", "Ulug'bek", "Saidaminxo'ja", "Islom"];
// var studentOfChimboy = ["Doniyor", "Sanjar", "Jumatoy"];

// // var newArray = studentOfChilonzor.concat(studentOfChimboy);

// // console.log(studentOfChilonzor.includes("Rustam"));

// for (let i = 0; i < studentOfChilonzor.length; i++) {
//     if (studentOfChilonzor[i] == "Rustam") {
//         console.log("True");
//     }
// }

var elForm = document.querySelector("#hero-form");
var elBtn = document.querySelector(".btn");
var elInput = document.querySelector(".input");
var elList = document.querySelector(".list")

var studentsName = [];

elForm.addEventListener("submit" , function(evt){
    evt.preventDefault();

    var inputValue = elInput.value.trim();
    
    if (inputValue) {
        studentsName.push(inputValue);
        elInput.value = null; 
        console.log(studentsName);   
        elList.innerHTML = null;
        renderList(studentsName, elList);  
    }
});

function renderList(array, placeForRendering){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        var newLi = document.createElement("li");
        newLi.textContent = array[i];
        placeForRendering.appendChild(newLi);
    }
}

