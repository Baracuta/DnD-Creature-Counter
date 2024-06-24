const add_button=
document.getElementById("add_button");
add_button.addEventListener("click", addCritter);

function addCritter(){
    document.getElementsByClassName(critterBox).style.backgroundColor="green";
}