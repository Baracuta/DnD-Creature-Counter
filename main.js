const addButton=
document.getElementById("add_button");
addButton.addEventListener("click", addCritter);

function addCritter(){
    document.getElementById(critterBox).style.backgroundColor="green";
}