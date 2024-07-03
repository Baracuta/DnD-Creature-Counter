//Global Variables
//Get generic critterBox
const jsBox=document.querySelectorAll("critterBox");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.querySelector("creature_table");

//The things that add a new creature

jsAdd.addEventListener("click", function(){
    const addBox=document.createElement("critterBox");
    jsTable.classList.add(addBox);
});