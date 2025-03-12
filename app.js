import products from "./models/products.js";
import { fetchData } from "./utils/httpReq.js";
import Cart from "./models/Cart.js";
const productsNode = document.getElementById("products");
const cartlistNode = document.getElementById("cart-list");
const totopriceNode = document
  .getElementById("total-price")
  .querySelector("span");

  
async function render() {
  const productsData = await fetchData();
  const cartlnstance = new Cart(cartlistNode, totopriceNode);
  const productslnstance = new products(
    productsNode,
    productsData,
    cartlnstance
  );

  // console.log(cartlnstance);
  productslnstance.showProducts();
  // console.log(productslnstance);
}
document.addEventListener("DOMContentLoaded", render);
