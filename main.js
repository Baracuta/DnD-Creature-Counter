//Global Variables
//Get generic critterBox
const jsBox=document.getElementsByTagName("genericCritter");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.getElementById("creature_table");
//Variable that tracks the current number of critterBoxes
let currentBoxes=1

//Functions for Buttons
//Add a new critter
function addCritter(){
    if (currentBoxes<12){
        let newBox=document.createElement("div");
            newBox.className="critterBox";
            let newBoxName=document.createElement("input");
                newBoxName.type="text";
                newBoxName.className="critterName";
            let newBoxHealth=document.createElement("input");
                newBoxHealth.type="text";
                newBoxHealth.className="critterHealth";
            let newBoxNotes=document.getElementsByClassName("critterButtons");
            newBox.appendChild(newBoxNotes);
            newBox.appendChild(newBoxname);
            newBox.appendChild(newBoxhealth);
        jsTable.appendChild(newBox);
        currentBoxes=(currentBoxes+1);
    }
    else{
        stop;
    }
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);