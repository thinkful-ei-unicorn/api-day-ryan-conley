import item from './item';

const items = [];
let error = null'
let hideCheckeditems = false;

const findById = function (id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function (item) {
    this.items.push(item);
};

function findAndUpdate(id, newData){
  let currentItem = this.findById(id);
  Object.assign(currentItem, newData);
}

function setError(error){
  this.error = error;
}

const findAndDelete = function (id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function () {
  this.hideCheckedItems = !this.hideCheckedItems;
};

export default {
  items,
  error,
  hideCheckeditems,
  findById,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  findAndUpdate,
  seterror()
};