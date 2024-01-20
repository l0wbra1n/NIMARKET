document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "kaos o-neck", img: "one.jpg", price: 45000 },
      { id: 2, name: "kaos v-neck", img: "2.jpg", price: 50000 },
      { id: 3, name: "kaos y-neck", img: "3.jpg", price: 35000 },
      { id: 4, name: "kaos turtlenect", img: "4.jpg", price: 80000 },
      { id: 5, name: "kaos polo", img: "5.jpg", price: 75000 },
      { id: 6, name: "kaos polo built-up", img: "6.jpg", price: 100000 },
      { id: 7, name: "kaos over size", img: "7.jpg", price: 55000 },
      { id: 8, name: "kaos ringer-shirt", img: "8.jpg", price: 30000 },
      { id: 9, name: "kaos pocket tee", img: "9.jpg", price: 110000 },
      { id: 10, name: "kaos raglan", img: "10.jpg", price: 200000 },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // jika cart kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // jika barang sudah ada, cheack apakah barang sudah ada dicart
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id != newItem.id) {
            return item;
          } else {
            // jika barang sudah ada, tambah jumlah dan quantitynya
            if (item.id === newItem.id) {
              item.quantity++;
              item.total = item.price * item.quantity;
              this.quantity++;
              this.total += item.price;
              return item;
            }
          }
        });
      }

      console.log(this.total);
    },
    remove(id) {
      // ambil item
      const cartItem = this.items.find((item) => item.id === id);
      // jika item lebih dari 1
      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          // jika barang bukan yang diklick
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // jika barang sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= item.price;
      }
      {
      }
    },
  });
});

// form validation
const cbtn = document.querySelector("#checkout-btn");
cbtn.disabled = true;
const Form = document.querySelector("#form");

Form.addEventListener("keyup", function () {
  for (let i = 0; i < Form.elements.length; i++) {
    if (Form.elements[i].value.length !== 0) {
      cbtn.classList.remove("disabled");
      cbtn.classList.add("disabled");
    } else {
      return false;
    }
  }
  cbtn.disabled = false;
  cbtn.classList.remove("disabled");
});

cbtn.addEventListener("click", function () {
  window.snap.embed("YOUR_SNAP_TOKEN", {
    embedId: "snap-container",
  });
});
// konversi to rupiah
const number = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
