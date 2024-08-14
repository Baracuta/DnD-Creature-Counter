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
let currentBoxes=0;
//Variable for all current critterBoxes
let allBoxes=jsTable.childNodes;
//First box in swap
let boxOne=null;
//Temporary box in swap
let tempBox=null;
//Second box in swap
let boxTwo=null;

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
    targetBox.style.borderColor="white";
    setTimeout(
    jsTable.removeChild(targetBox),1000);
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
        allBoxes[i].draggable=true;;
        allBoxes[i].addEventListener("click",runTest, startSwap);
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
//This lets me know the information I want is being accessed
function runTest(){
    console.log(this);
}
//This picks up the information from the critterBox that starts the drag
function startSwap(){
    boxOne=this;
    boxOne.addEventListener("dragend",finishSwap);
}
//This drops the information off and switches it with the old one
function finishSwap(){
    tempBox=null+boxOne;
    boxTwo=this;
    boxOne.replaceWith(boxTwo);
    boxTwo.replaceWith(tempBox);
}
//Divswap
//Figure out how to change the order of divs
//Maybe just axe the divswap functionality until far future?
//Yeah, focus on getting the visual aesthetic down and looking hot