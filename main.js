//Global Variables
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get button that locks critterBoxes
const jsLock=document.getElementById("lock_button");
//Get button that unlocks critterBoxes
const jsUnlock=document.getElementById("unlock_button");
//Get the table that holds all critterBox instances
let jsTable=document.getElementById("creature_table");
//Variable that tracks the current number of critterBoxes
let currentBoxes=0
//Variable that returns all current critterBoxes
let allBoxes=jsTable.childNodes

//Functions for Buttons
//Add a new critter
function addCritter(){
    if (currentBoxes<12){
        currentBoxes=(currentBoxes+1);
        let newBox=document.createElement("div");
            newBox.className="critterBox";
            newBox.id="critterBox"+currentBoxes;
            let newBoxID=newBox.id="critterBox"+currentBoxes;
            let newBoxName=document.createElement("input");
                newBoxName.type="text";
                newBoxName.className="critterName";
            let newBoxHealth=document.createElement("input");
                newBoxHealth.type="text";
                newBoxHealth.className="critterHealth";
                newBoxHealth.id="newBoxHealth"+currentBoxes;
            let newBoxNotes=document.createElement("textarea");
                newBoxNotes.className="critterNotes";
                newBoxNotes.id="newBoxNotes"+currentBoxes;
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
    let targetBox=this.parentNode.parentNode;
    targetBox.getElementsByClassName("critterNotes")[0].style.display="flex";
    targetBox.getElementsByClassName("critterHealth")[0].style.display="none"; 
}
//Function to show health block
function showHealth(){
    let targetBox=this.parentNode.parentNode;
    targetBox.getElementsByClassName("critterHealth")[0].style.display="flex";
    targetBox.getElementsByClassName("critterNotes")[0].style.display="none";
}
//Function to Lock critterBoxes
function lockBoxes(){
    jsAdd.disabled=false;
    jsAdd.style.backgroundColor="black";
    jsTable.style.opacity="1";
    allBoxes=jsTable.childNodes;
    for (let i=0;i<allBoxes.length;i++){
        allBoxes[i].draggable=false;
        allBoxes[i].droppab;e
        let boxElements=allBoxes[i].childNodes;
        for (let t=0;t<boxElements.length;t++){
            boxElements[t].disabled=false;
            let boxButtons=boxElements[3].childNodes;
            for (let x=0;x<boxButtons.length;x++){
                boxButtons[x].disabled=false;
            }
        }

    }
}
//Function to Unlock critterBoxes
function unlockBoxes(){
    jsAdd.disabled=true;
    jsAdd.style.backgroundColor="crimson";
    jsTable.style.opacity="0.5";
    allBoxes=jsTable.childNodes;
    for (let i=0;i<allBoxes.length;i++){
        allBoxes[i].draggable=true;
        allBoxes[i].addEventListener("dragstart",runTest);
        let boxElements=allBoxes[i].childNodes;
        for (let t=0;t<boxElements.length;t++){
            boxElements[t].disabled=true;
            let boxButtons=boxElements[3].childNodes;
            for (let x=0;x<boxButtons.length;x++){
                boxButtons[x].disabled=true;;
            }
        }
    }
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);
jsUnlock.addEventListener("click", unlockBoxes);
jsLock.addEventListener("click", lockBoxes);

//Going to test all of the draggable content down here
function runTest(){
    console.log(this);
}