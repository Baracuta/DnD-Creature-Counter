//Global Variables
//Get generic critterBox
const jsBox=document.getElementsByTagName("genericCritter");
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
            let newBoxNotes=document.createElement("div");
                newBoxNotes.className="critterNotes";
            newBox.appendChild(newBoxName);
            newBox.appendChild(newBoxHealth);
            newBox.appendChild(newBoxNotes);
            let newBoxButtons=document.createElement("div");
                newBoxButtons.className="critterButtons";
                let newHealthButton=document.createElement("button");
                    newHealthButton.className="healthButton";
                    newBoxButtons.appendChild(newHealthButton);
                let newNotesButton=document.createElement("button");
                    newNotesButton.className="notesButton";
                    newBoxButtons.appendChild(newNotesButton);
                let newDeleteButton=document.createElement("button");
                    newDeleteButton.className="deleteButton";
                    newDeleteButton.id="deleteButton"+currentBoxes;
                    newDeleteButton.addEventListener("click",deleteButtons);
                    newBoxButtons.appendChild(newDeleteButton);
            newBox.appendChild(newBoxButtons);
        jsTable.appendChild(newBox);
    }
    else{
        stop;
    }
}
//Note to me: make a separate function that identifies the box/button, then make separate functions for each button
//Function to Delete Boxes
function deleteButtons(){
    let whichOne=event.currentTarget;
    console.log(whichOne);
    document.getElementsByClassName("critterBox");
    let x=whichOne.id;
    console.log(x);
    if (x="deleteButton1"){
        alert("Button for box1");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (x="deleteButton2"){
        alert("Button for box2");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (x="deleteButton3"){
        alert("Button for box3");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (x="deleteButton4"){
        jsTable.removeChild(document.getElementById("critterBox4"));
        currentBoxes=(currentBoxes-1);
    }
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);