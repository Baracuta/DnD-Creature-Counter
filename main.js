//Global Variables
const jsBox=document.querySelectorAll("critterBox");

const jsAdd=document.getElementById("add_button");

const jsTable=document.querySelector("creature_table");



function addCritter(){
    const newCritter=jsBox.cloneNode(true);
    jsTable.appendChild(newCritter);
}

jsAdd.addEventListener("click",addCritter);