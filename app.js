var list = document.getElementById("list");

function addTodo(){

    var inp = document.getElementById("inp");
    if(inp.value === ""){
        alert("Please fill in the input");
        list.appendChild(list)
    }
    var li = document.createElement("li");
    li.setAttribute("id","li")
    var liText = document.createTextNode(inp.value);
    li.appendChild(liText);

    var delbtn = document.createElement("img");
    delbtn.setAttribute("src","https://purepng.com/public/uploads/thumbnail//purepng.com-trash-cantrash-cansteelplasticdustbinrecyclebiniconclipart-1421526646057lmawt.png")
    delbtn.setAttribute("id","delbtn")
    var btnText = document.createTextNode("")
    delbtn.setAttribute("class","delbtn")
    delbtn.setAttribute("onclick","delet(this)")
    delbtn.appendChild(btnText)
    li.appendChild(delbtn)

    var editbtn = document.createElement("img")
    editbtn.setAttribute("id","editbtn")
    editbtn.setAttribute("onclick","edit(this)")
    editbtn.setAttribute("src","data:image/png;base64,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")
    var btnText2 = document.createTextNode("")
    editbtn.appendChild(btnText2)
    li.appendChild(editbtn)
   
   
   
    list.appendChild(li)
    inp.value = " "
    

}

function delet(e){
e.parentNode.remove()
}



function edit(a){
//  var val = a.parentNode.firstChild.nodeValue;
 var editvalue = prompt("Enter Edit Value...");
 a.parentNode.firstChild.nodeValue = editvalue
}

function deleteall(){
    list.innerHTML = " "
}