const ShoppingCart = {
  cart: [],

  // Mahsulot qo'shish
  addProduct(product) {
    const existingProduct = this.cart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
  },

  // Mahsulot o'chirish
  removeProduct(productId) {
    this.cart = this.cart.filter((item) => item.id !== productId);
  },

  // Savatchadagi mahsulotlarni ko'rish
  viewCart() {
    if (this.cart.length === 0) {
      console.log("Savatcha bo'sh.");
    } else {
      console.table(this.cart);
    }
  },

  // Umumiy narxni hisoblash
  getTotalPrice() {
    return this.cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  },

  // Savatchani tozalash
  clearCart() {
    this.cart = [];
  },
};

// Mahsulotlarni yaratish
const product1 = { id: 1, name: "Noutbuk", price: 500, quantity: 1 };
const product2 = { id: 2, name: "Telefon", price: 300, quantity: 2 };
const product3 = { id: 3, name: "Quvvatlagich", price: 50, quantity: 3 };

// Mahsulotlarni qo'shish
ShoppingCart.addProduct(product1);
ShoppingCart.addProduct(product2);
ShoppingCart.addProduct(product3);

// Savatchani ko'rish
ShoppingCart.viewCart();

// Umumiy narxni chiqarish
console.log("Umumiy narx:", ShoppingCart.getTotalPrice(), "so'm");

// Mahsulotni o'chirish
ShoppingCart.removeProduct(2);
ShoppingCart.viewCart();

// Savatchani tozalash
ShoppingCart.clearCart();
ShoppingCart.viewCart();
