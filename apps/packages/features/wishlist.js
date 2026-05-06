const Wishlist = function (elementId) {
  this.items = [];
  this.element = document.getElementById(elementId);
};
// to implement 
Wishlist.prototype.addItem = function (itemId) {
  // this method will add the item to the wishlist and update the UI accordingly
};
Wishlist.prototype.removeItem = function (itemId) {
  this.items = this.items.filter((item) => item.id !== itemId);
  this.render();
};

Wishlist.prototype.addItem = function (item) {
  const exists = this.items.find((i) => i.id === item.id);
  if (!exists) {
    this.items.push(item);
    this.render();
  }
};

Wishlist.prototype.render = function () {
  this.clear();

  this.items.forEach((i) => {
    const li = document.createElement('li');
    const remove = document.createElement('button');
    remove.innerHTML = 'Remove from wishlist';
    remove.addEventListener('click', (e) => {
      this.removeItem(i.id);
    });
    li.innerHTML = i.name;
    li.appendChild(remove);

    this.element.appendChild(li);
  });
}

Wishlist.prototype.clear = function () {
  this.element
    .querySelectorAll('li')
    .forEach((li) => {
      this.element.removeChild(li);
    });
}

const wishlist = new Wishlist('wishlist');

document
  .querySelectorAll('.add-to-wishlist')
  .forEach((e) => {
    e.addEventListener('click', (ev) => {
      const element = ev.target;
      wishlist.addItem({
        id: element.dataset.id,
        name: element.dataset.name
      });
    })
  });