
//////////////////////////////////////////////////////////////////////////////////
// Aici am scris codul pt a arata ziua dinamic cu sufix diferit in functie de zi//
/////////////////////////////////////////////////////////////////////////////////// 

const dayOfWeekName = new Date().toLocaleDateString( //Ca sa-mi returneze ziua (Monday, Tuesday, etc..)

    'default', {weekday: 'long'}
);

const d = new Date();

const month = d.toLocaleDateString(  // Ca sa-mi returneze luna (March, April, etc)
    'default', {month: 'long'}
);

let day = d.getDate();   // Ca sa-mi returneze ziua 1-31

const idk = document.getElementById("idk");

const nth = function(day) {                // Ca sa modific dinamic sufixul zilei
    if (day > 3 && day < 21) return "th";
    switch (day % 10) {
        case 1: return "st";
        case 2: return "nd";
        case 3: return "rd";
        default: return "th";
    }
 };
 
idk.textContent = dayOfWeekName + ", " + day + `${nth(day)}` + " " + month

//////////////////////////////////////////////////////////
//FUNCTIONALITATE TO-DO LIST/////////////////////////////
/////////////////////////////////////////////////////////


const inputElement = document.getElementById("input");
const buttonElement = document.getElementById("ok");
const listElement = document.getElementById("list");
const toDoList = [];

const addNewListItem = (textValue) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(textValue));
  listElement.appendChild(li);
};



buttonElement.addEventListener("click", () => {
  const value = inputElement.value;
  toDoList.push(value);
  addNewListItem(value);
  inputElement.value = "";
});



// localStorage.setItem("entry", JSON.stringify(entry));
// localStorage.setItem('tasks', JSON.stringify(toDoList));

// window.onload = () => {
//   localStorage.getItem("tasks");
//   JSON.parse(localStorage.getItem('tasks'));
// }

//////////////////////////////////////////////////////////
// LI CLICK EVENT + DELETE AFTER 3 SECONDS :) ////////////////////////////////////////
/////////////////////////////////////////////////////////

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
  setTimeout ( function () {
    ev.target.remove();
  }, 1500);
}, false);

/////////////////////////////////////////////////////////////////
// INPUT CU ANIMATIE ///////////////////////////////////////////
////////////////////////////////////////////////////////////////
function expand() {
  slider.className = 'expanded';
  setTimeout(function() {
    input.focus();
  }, 500);
}

function collapse() {
  slider.className = 'collapsed';
  input.blur();
}

toggle.onclick = expand;

input.onblur = function() {
  setTimeout(collapse, 100);
}

buttonWithText.onsubmit = function(e) {
  e.preventDefault(); 
  collapse();
}

//////////////////////////////////////////////////////////

