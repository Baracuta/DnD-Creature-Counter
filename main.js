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

//Function to Delete Boxs
function deleteButtons(button){
    document.getElementsByClassName("critterBox");
    let x=button.id;
    console.log(button.id);
    if (button.id="deleteButton1"){
        alert("Button for box1");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (button.id="deleteButton2"){
        alert("Button for box2");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton3"){
        alert("Button for box3");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (button.id="deleteButton4"){
        jsTable.removeChild(document.getElementById("critterBox4"));
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton5"){
        jsTable.removeChild("critterBox5");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton6"){
        jsTable.removeChild("critterBox6");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton7"){
        jsTable.removeChild("critterBox7");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton8"){
        jsTable.removeChild("critterBox8");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton9"){
        jsTable.removeChild("critterBox9");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton10"){
        jsTable.removeChild("critterBox10");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton11"){
        jsTable.removeChild("critterBox11");
        currentBoxes=(currentBoxes-1);
    }
    else
    if (newDeleteButton.id="deleteButton12"){
        jsTable.removeChild("critterBox12");
        currentBoxes=(currentBoxes-1);
    }
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);