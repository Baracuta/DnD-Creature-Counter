document.getElementById("add_button");
let table=document.getElementById("creature_table");
let box=document.getElementsByClassName("critterBox");
add_button.addEventListener("click",addCritter);


function addCritter(){
    table.append(box);
}