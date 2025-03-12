import Display from "./Displa.js";
class Products extends Display {
  constructor(parent, products, cart) {
    // this.parent = parent;
    // this.products = products;
    super(parent, products);
    this.cart = cart;

    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.products.forEach((product) => this.createCard(product));
  }
  createCard(data) {
    const cardELe = document.createElement("div");
    const imgEle = this.prodactesImg(data);
    const infoEle = this.productlnfo(data);
    cardELe.innerHTML = imgEle;
    cardELe.innerHTML += infoEle;
    this.parent.appendChild(cardELe);
  }
  prodactesImg(data) {
    const { image, alt } = data;
    const imgjsx = `<img alt='${alt}' src='${image}'/>`;
    // img.src = data.image;
    // img.alt = data.alt;
    return imgjsx;
  }
  productlnfo(data) {
    const { id, name, price } = data;
    const infojsx = `<div id="product-info">
    <h3>${name}</h3>
    <div>
    <span>$${price}</span>
    <button data-id=${id} >+</button>
     </div>
     </div>`;
    return infojsx;
  }
  handleEvent() {
    const element = event.target;
    console.log(element.tagName);
    if (element.tagName === "BUTTON") {
      this.addTocart(element.dataset.id);
    }
  }
  addTocart(id) {
    const product = this.products.find((i) => i.id === +id);
    console.log(product);
    this.cart.products.push(product);
    // console.log(this.cart);
    this.cart.showProducts();
  }
}
export default Products;
