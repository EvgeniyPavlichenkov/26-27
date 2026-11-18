document.addEventListener('DOMContentLoaded', () => {
  const ITEMS_LOCAL_STORAGE_KEY = 'ITEMS_LOCAL_STORAGE_KEY';

  const newItemInputContainerElement = document.getElementById('new-item-input-container');
  const newItemInputElement = document.getElementById('new-item-input');
  newItemInputElement.addEventListener('keypress', onNewItemInputKeyPress);

  const listElement = document.getElementById('list');

  class Item {
    title = '';
    id = '';
    isDone = false;
    
    constructor(title, isDone, id = undefined){
      if (!id) {
        this.id = 'item_' + new Date().getTime();
      } else {
        this.id = id;
      }
      
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

  function onItemCheckboxClick(itemId){
    const savedItems = getItemsFromLS();
    const updatedItems = savedItems.map(item => {
      if (item.id !== itemId) {
        return item;
      }
      return new Item(item.title, !item.isDone, item.id);
    });
    setItemsToLS(updatedItems);

    const listItemElement = document.getElementById(itemId);
    if (!listItemElement.classList.contains('list__item_done')) {
      listItemElement.classList.add('list__item_done');
    } else {
      listItemElement.classList.remove('list__item_done');
    }
  }

  function onItemDeleteClick(itemId) {
    if(!confirm('Вы действительно хотите удалить элемент?')){
      return;
    }

    const savedItems = getItemsFromLS();
    const updatedItems = savedItems.filter(item => item.id !== itemId);
    setItemsToLS(updatedItems);
    document.getElementById(itemId).remove();
  }

  function renderSavedItems() {
    const savedItems = getItemsFromLS();

    for (let i = 0; i < savedItems.length; i++) {
      const item = savedItems[i];

      if (!document.getElementById(item.id)) {
        const listItemElement = document.createElement('div');
        listItemElement.classList.add('list__item');
        listItemElement.id = item.id;
        if (item.isDone) {
          listItemElement.classList.add('list__item_done');
        }

        const listItemCheckboxElement = document.createElement('span');
        listItemElement.addEventListener('click', (event) => {
          event.stopPropagation();
          onItemCheckboxClick(item.id)
        });
        listItemCheckboxElement.classList.add('list__item-checkbox');
        
        const listItemDeleteElement = document.createElement('span');
        listItemDeleteElement.classList.add('list__item-delete');
        listItemDeleteElement.addEventListener('click', (event) => {
          event.stopPropagation();
          onItemDeleteClick(item.id)
        });
        
        listItemElement.append(listItemCheckboxElement, item.title, listItemDeleteElement);
        listElement.insertBefore(listItemElement, newItemInputContainerElement);
      }
    }
  }

  renderSavedItems();
})