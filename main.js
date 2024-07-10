//Global Variables
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
let jsTable=document.getElementById("creature_table");
//Variable that tracks the current number of critterBoxes
let currentBoxes=0

//Functions for Buttons
//Add a new critter
function addCritter(){
    if (currentBoxes<12){
        currentBoxes=(currentBoxes+1);
        let newBox=document.createElement("div");
            newBox.className="critterBox";
            let newBoxID=newBox.id="critterBox"+currentBoxes;
            let newBoxName=document.createElement("input");
                newBoxName.type="text";
                newBoxName.className="critterName";
            let newBoxHealth=document.createElement("input");
                newBoxHealth.type="text";
                newBoxHealth.className="critterHealth";
                newBoxHealth.id="newBoxHealth"
            let newBoxNotes=document.createElement("input");
                newBoxNotes.className="critterNotes";
                newBoxNotes.id="newBoxNotes"
            newBox.appendChild(newBoxName);
            newBox.appendChild(newBoxHealth);
            newBox.appendChild(newBoxNotes);
            let newBoxButtons=document.createElement("div");
                newBoxButtons.className="critterButtons";
                let newHealthButton=document.createElement("button");
                    newHealthButton.className="healthButton";
                    newHealthButton.addEventListener("click",showHealth);
                    newBoxButtons.appendChild(newHealthButton);
                let newNotesButton=document.createElement("button");
                    newNotesButton.className="notesButton";
                    newNotesButton.addEventListener("click",showNotes);
                    newBoxButtons.appendChild(newNotesButton);
                let newDeleteButton=document.createElement("button");
                    newDeleteButton.className="deleteButton";
                    newDeleteButton.id="deleteButton"+currentBoxes;
                    newDeleteButton.addEventListener("click",deleteBox);
                    newBoxButtons.appendChild(newDeleteButton);
            newBox.appendChild(newBoxButtons);
        jsTable.appendChild(newBox);
    }
    else{
        stop;
    }
}

//Function to delete a critterBox
function deleteBox(){
    let whichOne=event.currentTarget;
    let targetBox=whichOne.parentNode.parentNode;
    jsTable.removeChild(targetBox);
    currentBoxes=(currentBoxes-1);
}

//Function to show a notes block
function showNotes(){
    let whichOne=event.currentTarget;
    let targetBox=whichOne.parentNode.parentNode;
    let targetNotes=targetBox.getElementById("newBoxNotes");
    let targetHealth=targetBox.getElementById("newBoxHealth");
    targetNotes.style.display="block";
    targetHealth.style.display="none";
}
//Function to show health block
function showHealth(){
    let whichOne=event.currentTarget;
    let targetBox=whichOne.parentNode;
    targetBox.newBoxHealth.style.display="block";
    targetBox.newBoxNotes.style.display="none";

}

//Button Listeners
jsAdd.addEventListener("click", addCritter);