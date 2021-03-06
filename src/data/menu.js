// data/menu.js
const _menu = [
  {
    id: 1,
    name: "Kaya Butter 1 Slice",
    price: 1.50,
    type: "Food"
  },
  {
    id: 2,
    name: "Kaya Butter 2 Slices",
    price: 2.40,
    type: "Food"
  },
  {
    id: 3,
    name: "Kopi O Hot (Regular)",
    price: 1.60,
    type: "Beverage"
  }
]

export default {
  getMenu() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => resolve(_menu), 200)
    })
  }
}
