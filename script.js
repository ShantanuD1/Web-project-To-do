const inputbox=document.getElementById("box-input");
const listcontainer=document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontainer.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value= "";
    saveData();
}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);
/*save task to local storage*/
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML);
}
function showTask() {
    const data = localStorage.getItem("data");
    if (data) {
        listcontainer.innerHTML = data;
    }
}

showTask();
