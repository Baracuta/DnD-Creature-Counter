let button=document.getElementById("add_button");
button.addEventListener<"click">(addCritter);

function addCritter(){
    document.getElementsByClassName(critterBox).style.backgroundColor="green";
}