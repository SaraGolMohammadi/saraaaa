class Display {
  constructor(parent, products) {
    this.parent = parent;
    this.products = products;
    this.parent.addEventListener("click", this);
  }
  showProducts() {
    this.toshow = [...new Set(this.products)];
    this.parent.innerHTML = "";
    this.toshow.forEach((product) => {
      const qty = this.products.filter((p) => p.id === product.id).length;
      this.createcard(product, qty);
    });
    this.calculateTotalprice();
  }

  createcard(data, qty) {
    const cardELe = document.createElement("div");
    const imgEle = this.productImg(data);
    const infoEle = this.productInfo(data);

    cardELe.innerHTML = imgEle;
    cardELe.innerHTML += infoEle;
    if (this.construtor.name === Cart) {
      const controlEle = this.productControl(data, qty);
      cardELe.innerHTML += controlEle;
    }

    this.parent.appendChild(cardELe);
  }
  //   productImg(data) {
  //     const { image, alt } = data;
  //     const imgjsx = `<img alt="${alt}" src="${image}"/>`;
  //     return imgjsx;
  //   }
}
export default Display;
