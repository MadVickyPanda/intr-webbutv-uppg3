const button =document.getElementById("myButton");
const div = document.getElementById("myDiv");

function changeContent() {
    div.innerHTML= "<h1>Goodbye World!</h1>";

}

button.addEventListener("click", changeContent);
