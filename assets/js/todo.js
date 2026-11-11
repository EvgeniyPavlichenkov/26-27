const ITEMS_LOCAL_STORAGE_KEY = 'ITEMS_LOCAL_STORAGE_KEY';

const newItemInputElementContainer = document.getElementById('new-item-input-container');
const newItemInputElement = document.getElementById('new-item-input');
newItemInputElement.addEventListener('keypress', onNewItemInputKeyPress);

const listElement = document.getElementById('list');

class Item {
  title = '';
  id = '';
  isDone = false;
  
  constructor(title, isDone){
    this.id = 'item_' + new Date().getTime();
    this.title = title;
    this.isDone = isDone;
  }
}

function getItemsFromLS () {
  let parsedItems;
  const rawItems = localStorage.getItem(ITEMS_LOCAL_STORAGE_KEY);
  if (!rawItems) {
    parsedItems = [];
  } else {
    parsedItems = JSON.parse(rawItems);
  }

  for (let i = 0; i < parsedItems.length; i++) {
    parsedItems[i].__proto__ = Item.prototype;
  }

  return parsedItems;
}

function setItemsToLS (items) {
  localStorage.setItem(ITEMS_LOCAL_STORAGE_KEY, JSON.stringify(items));
}

function onNewItemInputKeyPress(keyboardEvent) {
  if (keyboardEvent.code !== 'Enter') {
    return;
  }

  const inputValue = newItemInputElement.value;

  if (inputValue === '') {
    alert('Значение не может быть пустым!');
    return;
  }

  const newItem = new Item(inputValue, false);
  const savedItems = getItemsFromLS();
  const updatedSavedItems = savedItems.concat([newItem]);

  setItemsToLS(updatedSavedItems);

  newItemInputElement.value = '';

  renderSavedItems();
}

function renderSavedItems() {
  const savedItems = getItemsFromLS();

  for (let i = 0; i < savedItems.length; i++) {
    const item = savedItems[i];
    const listItemElement = document.createElement('div');
    listItemElement.classList.add('list__item');
    if (item.isDone) {
      listItemElement.classList.add('list__item_done');
    }
    listItemElement.innerHTML = item.title;

    listElement.insertBefore(listItemElement, newItemInputElementContainer);
  }
}

renderSavedItems();
