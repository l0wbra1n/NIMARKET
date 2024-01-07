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
      this.items.push(newItem);
      this.quantity++;
      this.total += newItem.price;
      console.log(this.total);
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
