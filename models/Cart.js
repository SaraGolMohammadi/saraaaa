import Display from "./Displa.js";
class Cart extends Display {
  constructor(parent, price) {
    // this.parent = parent;
    super(parent);
    this.price = price;
    this.products = [];
    this.toshow = [];
    // this.parent.addEventListener("click", this);
  }

  createcard(data, qty) {
    const cardELe = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);
    const controlEle = this.productControl(data, qty);

    cardELe.innerHTML = imgEle;
    cardELe.innerHTML += infoEle;
    cardELe.innerHTML += controlEle;

    this.parent.appendChild(cardELe);
  }
  productImg(data) {
    const { image, alt } = data;
    const imgjsx = `<img alt="${alt}" src="${image}"/>`;
    return imgjsx;
  }
  productInfo(data) {
    const { name, price } = data;
    const infojsx = `<div id="cart-info">
    <h4>${name}</h4>
    <p>$${price}</p>
    </div>
    `;
    return infojsx;
  }
  productControl(data, qty) {
    const { id } = data;
    const controljsx = `<div id="cart-control">
    <div>
    <button data-id=${id}>-</button>
    <spun>${qty}</span>
    <button data-id=${id}>+</button>
    </div>
    <button data-id=${id}>Remove</button>
    </div>
    `;
    return controljsx;
  }
  handleEvent(event) {
    const tagName = event.target.tagName;
    const id = event.target.dataset.id;
    const type = event.target.innerText;
    if (tagName !== "BUTTON") return;
    switch (type) {
      case "+":
        this.increase(id);
        break;
      case "-":
        this.decrease(id);
        break;
      case "Remove":
        this.remove(id);
        break;
    }
  }
  increase(id) {
    const product = this.products.find((p) => p.id === +id);
    this.products.push(product);
    this.showProducts();
  }
  decrease(id) {
    const index = this.products.findIndex((p) => p.id === +id);
    this.products.splice(index, 1);
    this.showProducts();
  }
  remove(id) {
    const newproducts = this.products.filter((p) => p.id !== +id);
    this.products = newproducts;
    this.showProducts();
  }
  calculateTotalprice() {
    const total = this.products.reduce((acc, cur) => (acc += cur.price), 0);
    this.price.innerHTML = "$" + total;
  }
}
export default Cart;
