const addButton=
document.getElementById("add_button");
add_button.addEventListener("click", addCritter);

function addCritter(){
    document.getElementById(critterBox).style.backgroundColor="green";
}