let inputCreate = document.getElementById("input-create");
let buttonCreate = document.getElementById("btn-create");
let inputSearch = document.getElementById("input-search");
let buttonSearch = document.getElementById("btn-search");
let toDoList = document.getElementById("todo-list");
let doneList = document.getElementById("done-list");
let buttonReload = document.getElementById("btn-reload");
let doneListBuffer = "";

buttonCreate.addEventListener('click', function () {
  let value = inputCreate.value;
  if (value && !(/^\s*$/.test(value))) {
    addItemToDom(value);
    inputCreate.value = '';
  }
})

buttonSearch.addEventListener('click', function () {
  let value = inputSearch.value;
  if (value && !(/^\s*$/.test(value))) {
    sortDoneList(value);
    inputSearch.value = '';
  }
})

buttonReload.addEventListener('click', function () {
  doneList.innerHTML = doneListBuffer;
})

function addItemToDom(value) {
  let itemView = `
      <div class="item">
        <span class="item-text">${value}</span>
        <span class="secondary-content">
          <div class="item-btn item-btn-del btn-floating btn-small waves-effect waves-light red">x</div>
        </span>
      </div>`;

  let item = document.createElement('li');
  //класс, который я не вспомнил на уроке
  item.classList = 'collection-item';
  item.innerHTML = itemView;

  //добавим слушатель для удаления
  let buttonDelete = item.getElementsByClassName('item-btn-del')[0];
  buttonDelete.addEventListener('click', removeItem);

  toDoList.appendChild(item);

}

function removeItem(event) {
  let item = event.target.parentNode.parentNode.parentNode;
  toDoList.removeChild(item);
  let toRemove = /<span class="secondary-content">[\s\S]*<\/span>/;
  item.innerHTML = item.innerHTML.replace(toRemove, " ");
  doneList.appendChild(item);
  doneListBuffer = doneList.innerHTML;
}

function sortDoneList(value) {
  itemsToSort = doneList.getElementsByClassName("item-text");
  for (let i = 0; i < itemsToSort.length; i++) {
    if (!itemsToSort[i].innerHTML.includes(value)) {
      doneList.removeChild(itemsToSort[i].parentNode.parentNode);
      i--;
    }
  }
}