var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var deleteButton = document.getElementsByClassName("delete");
var ul = document.querySelector("ul");


// Return an input length
function inputLength() {
    return input.value.length
}


// Create a list element from input value with delete button
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.innerHTML = li.innerHTML + " ";
    li.classList.add("listelement");
    ul.appendChild(li);
    input.value = "";

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(deleteButton);
    deleteButton.onclick = removeParent;
}


// Add list element on mouse click function
function addListAfterClick() {
    if(inputLength() > 0) {
      createListElement()}
}

button.addEventListener("click", addListAfterClick);


// Add list element on keypress (Enter) function
function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.which === 13) {
      createListElement()}
}

input.addEventListener("keypress", addListAfterKeypress);


// Done action marking
ul.addEventListener("click", function(event) {
    event.target.classList.toggle("done")
});


// Delete button action
function removeParent(event) {
    event.target.parentElement.remove();
}

for(var i=0; i < deleteButton.length; i++) {
    deleteButton[i].addEventListener("click", removeParent);
}
