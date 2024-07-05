//Global Variables
//Get generic critterBox
const jsBox=document.getElementsByTagName("genericCritter");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.getElementById("creature_table");
//Variable that tracks the current number of critterBoxes
let currentBoxes=0

//Functions for Buttons
//Add a new critter
function addCritter(){
    if (currentBoxes<12);
        let newBox=document.createElement("div");
            newBox.className="critterBox";
            let newBoxname=document.createElement("input");
                newBoxname.type="text";
                newBoxname.className="critterName";
            let newBoxhealth=document.createElement("input");
                newBoxhealth.type="text";
                newBoxhealth.className="critterHealth";
            newBox.appendChild(newBoxname);
            newBox.appendChild(newBoxhealth);
        jsTable.appendChild(newBox);
        currentBoxes=(currentBoxes+1);
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);