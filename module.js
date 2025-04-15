import {
    ShopProduct, Timer, Flight, Point, Product, Cart, Post, BankCard, Grade
} from './app.js';

// Misollar:

const product = new ShopProduct("Olma", 5000, 3);
console.log(product.getTotalPrice()); // 15000

const timer = new Timer(3);
timer.start();

const flight = new Flight("Toshkent", "Istanbul", 5);
console.log(flight.getInfo());

const point = new Point(3, 4);
console.log(point.getDistance()); // 5

const p1 = new Product("Non", 3000);
const cart = new Cart();
cart.addProduct(p1);
console.log(cart.getTotal()); // 3000

const post = new Post("Sarlavha", "Kontent");
post.like();
console.log(post.likes); // 1

const card = new BankCard("Ali", 100000, 50000);
card.withdraw(60000); // Rad etildi

const student = new Grade("Ali", [70, 80, 90]);
console.log(student.getAverage()); // 80
console.log(student.isPassed()); // true
