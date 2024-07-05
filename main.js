//Global Variables
//Get generic critterBox
const jsBox=document.getElementsByTagName("genericCritter");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.getElementById("creature_table");

//Functions for Buttons
//Add a new critter
function addCritter(){
    let newBox=document.createElement("div");
        newBox.className="critterBox";
        let newBoxname=document.createElement("input type=text");
        let newBoxhealth=document.createElement("input type=text");
        newBox.appendChild(newBoxname);
        newBox.appendChild(newBoxhealth);
    jsTable.appendChild(newBox);
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);