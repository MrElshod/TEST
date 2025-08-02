const products = [
  { id: 1, name: "Standoff 2 Голда 1000", price: 150000, img: "https://via.placeholder.com/200?text=Gold" },
  { id: 2, name: "Robux 800", price: 120000, img: "https://via.placeholder.com/200?text=Robux" },
  { id: 3, name: "Brawl Stars 170 Гемов", price: 95000, img: "https://via.placeholder.com/200?text=Gems" },
  { id: 4, name: "Аккаунт Minecraft", price: 200000, img: "https://via.placeholder.com/200?text=Account" },
];

const productList = document.getElementById("product-list");
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const cartItemsList = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

let cart = [];

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.img}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} UZS</p>
      <button onclick="addToCart(${product.id})">В корзину</button>
    `;
    productList.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  updateCart();
}

function updateCart() {
  cartItemsList.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} UZS`;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => removeFromCart(index);
    li.appendChild(btn);
    cartItemsList.appendChild(li);
  });
  cartCount.textContent = cart.length;
  cartTotal.textContent = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

cartBtn.onclick = () => cartModal.style.display = "flex";
closeCart.onclick = () => cartModal.style.display = "none";

renderProducts();
