function onReady() {
  let id = 0;
  let toDos = JSON.parse(localStorage.getItem('theList'));
  const addToDoForm = document.getElementById('addToDoForm');
  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });
    id++;
    newToDoText.value = '';
    localStorage.setItem('theList', JSON.stringify(toDos));
    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteButton = document.createElement('button');
      deleteButton.innerHTML = 'Delete';
      checkbox.type = 'checkbox';
      checkbox.checked = toDo.complete;
      newLi.textContent = toDo.title;
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
      checkbox.addEventListener('click', event => {
        toDo.complete = (checkbox.checked);
        localStorage.setItem('theList', JSON.stringify(toDos));
      });
      deleteButton.addEventListener('click', event => {
        toDos = (toDos.filter(function(filterToDo){
          return filterToDo.id !== toDo.id;
        }));
        localStorage.setItem('theList', JSON.stringify(toDos));
        renderTheUI();
      });
    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });
  renderTheUI();
}

window.onload = function() {
  onReady();
};
