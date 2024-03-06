const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
 
function addTask(){
  if(inputBox.value === " "){
    alert("You Must Write Something");
  } else {
    //create a new HTML element i.e list item element ('<li>')
    let li = document.createElement("li");

    //whatever text or html content is typed into the input field referenced by "inputBox" will be assigned as inner content of the newly created list item ('<li>')
    li.innerHTML = inputBox.value;

    //places the new list item ('li') into designated container ('listContainer') in our webpage documents structure.
    listContainer.appendChild(li);

    let span = document.createElement("span");
    //'u00d7' represents the unicode code point for the multiplication sign
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function(e){
  //checks if the clicked element is an '<li>' (list item) element
  if(e.target.tagName === "LI"){
    //if the clicked element is an '<li>' element, this line toggles the presence of the "checked" class on the clicked list item.
    e.target.classList.toggle("checked");
    saveData();
  }
  //checks if the clicked element is a '<span' element.
  else if(e.target.tagName === "SPAN"){
    //if the clicked element is '<span>', this line removes the parent element of the '<span>' from the DOM.
    e.target.parentElement.remove();
    saveData(); 
  }  
},false); 

function saveData(){
  localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();

//e.target:-this property represents the element that triggered the event
//tagName:- this property returns the tag name of the element in UpperCase letters.
//toggle:-generally means to switch between two states or options, for eg:- switching light on if it is off and off if it is on.