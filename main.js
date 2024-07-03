//Global Variables
//Get generic critterBox
const jsBox=document.querySelectorAll("critterBox");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.querySelector("creature_table");

//Scripts that make Add Button Work

function addCritter(){
    const newCritter=jsBox.cloneNode(true);
    jsTable.appendChild(newCritter);
}

jsAdd.addEventListener("click",addCritter);