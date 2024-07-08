//Global Variables
//Get generic critterBox
const jsBox=document.getElementsByTagName("genericCritter");
//Get button that adds a new critterBox
const jsAdd=document.getElementById("add_critter");
//Get the table that holds all critterBox instances
const jsTable=document.getElementById("creature_table");
//Variable that tracks the current number of critterBoxes
let currentBoxes=0
//Variables for deleteButton IDs
let delete1=document.getElementById("deleteButton1");
let delete2=document.getElementById("deleteButton2");
let delete3=document.getElementById("deleteButton3");
let delete4=document.getElementById("deleteButton4");
let delete5=document.getElementById("deleteButton5");
let delete6=document.getElementById("deleteButton6");
let delete7=document.getElementById("deleteButton7");
let delete8=document.getElementById("deleteButton8");
let delete9=document.getElementById("deleteButton9");
let delete10=document.getElementById("deleteButton10");
let delete11=document.getElementById("deleteButton11");
let delete12=document.getElementById("deleteButton12");

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
                    newBoxButtons.appendChild(newDeleteButton);
            newBox.appendChild(newBoxButtons);
        jsTable.appendChild(newBox);
    }
    else{
        stop;
    }
}

//Button Listeners
jsAdd.addEventListener("click", addCritter);
//Delete Button Functionality
delete1.addEventListener("click",function(){
    jsTable.removeChild(newBox1);
});
delete2.addEventListener("click",function(){
    jsTable.removeChild(newBox2);
});
delete3.addEventListener("click",function(){
    jsTable.removeChild(newBox3);
});
delete4.addEventListener("click",function(){
    jsTable.removeChild(newBox4);
});
delete5.addEventListener("click",function(){
    jsTable.removeChild(newBox5);
});
delete6.addEventListener("click",function(){
    jsTable.removeChild(newBox6);
});
delete7.addEventListener("click",function(){
    jsTable.removeChild(newBox7);
});
delete8.addEventListener("click",function(){
    jsTable.removeChild(newBox8);
});
delete9.addEventListener("click",function(){
    jsTable.removeChild(newBox9);
});
delete10.addEventListener("click",function(){
    jsTable.removeChild(newBox10);
});
delete11.addEventListener("click",function(){
    jsTable.removeChild(newBox11);
});
delete12.addEventListener("click",function(){
    jsTable.removeChild(newBox12);
});

