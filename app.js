let input = document.querySelector(".input-box");
let btn = document.querySelector("button");
let list = document.querySelector(".list");

btn.addEventListener("click",() => {
    if(input.value == ''){
        alert("You must write something")
    }
    else{
        let item = document.createElement("li");
        item.innerText = input.value;

        let dltBtn = document.createElement("button");
        dltBtn.innerHTML = "\u00d7";
        dltBtn.classList.add("delete");


        item.append(dltBtn);
        list.append(item);
        input.value = "";
        saveData();        
    }
    
});
 
list.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        saveData();
    }
    else if(event.target.nodeName == "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }
});



function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showTask(){
    list.innerHTML = localStorage.getItem("data");
}

showTask();
