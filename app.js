function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  addToDoForm.addEventListener('submit', event => {
    event.preventDefault ();
    //get the text
    let title = newToDoText.value;
    //create a new li
    let newLi = document.createElement('li');
    //create a new input
    let checkbox = document.createElement('input');
    //create a delete button
    let deleteButton = document.createElement('button');
    //set the input's type to checkbox
    checkbox.type = 'checkbox';
    //delete button text
    deleteButton.innerHTML = 'Delete';
    //set the title
    newLi.textContent = title;
    //attach the checkbox to the li
    newLi.appendChild(checkbox);
    //attach deleteButton to li
    newLi.appendChild(deleteButton);
    //attach the li to ul
    toDoList.appendChild(newLi);
    //empty the input
    newToDoText.value = '';
    deleteButton.addEventListener('click', () => {
      newLi.parentNode.removeChild(newLi);
    })
  });
}

window.onload = function() {
  onReady();
};
