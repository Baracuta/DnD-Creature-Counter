document.getElementById("add_button");
let box=document.getElementsByClassName("critterBox");
add_button.addEventListener("click",addCritter);


function addCritter(){
    box.style.backgroundColor="green";
}