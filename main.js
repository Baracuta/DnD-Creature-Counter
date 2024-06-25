const jsBox=document.querySelectorAll("critterBox");

const jsAdd=document.getElementById("add_button");

const jsTable=document.querySelector("creature_table");

//Old stuff here, currently not working
//document.getElementById("add_button");
//let table=document.getElementById("creature_table");
//let box=document.getElementsByClassName("critterBox");

jsAdd.addEventListener("click",addCritter);


function addCritter(){
    jsTable.appendChild(jsBox);
}