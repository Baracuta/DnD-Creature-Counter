//Global Variables
//Get generic critterBox
const jsBox=document.querySelectorAll("critterBox");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.getElementById("creature_table");

//The things that add a new creature

jsAdd.addEventListener("click", function(){
    let addBox=document.createElement("p");
    addBox.innerHTML="For testing purposes";
    jsTable.appendChild(addBox);
});