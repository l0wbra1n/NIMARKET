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
      // cek adakah barang yang sama dicart
      const cartItem = this.items.find((item) => item.id === newItem);

      // jika belum ada barang dicart
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        //  jika barang sudah ada dicart, cek apakah barang sudah ada dicart atau belum
        this.items = this.items.map((item) => {
          // jika barang berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // jika barang sudah ada tambah quantity totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
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
