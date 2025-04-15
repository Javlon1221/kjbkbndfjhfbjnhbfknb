// 1. ShopProduct
export class ShopProduct {
  constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
  }
  getTotalPrice() {
      return this.price * this.quantity;
  }
}

// 2. Timer
export class Timer {
  constructor(seconds) {
      this.seconds = seconds;
  }
  start() {
      for (let i = 1; i <= this.seconds; i++) {
          setTimeout(() => {
              console.log(`${i} sekund o‘tdi`);
          }, i * 1000);
      }
  }
}

// 3. Flight
export class Flight {
  constructor(from, to, duration) {
      this.from = from;
      this.to = to;
      this.duration = duration;
  }
  getInfo() {
      return `${this.from} ➜ ${this.to} (${this.duration} soat)`;
  }
}

// 4. Point
export class Point {
  constructor(x, y) {
      this.x = x;
      this.y = y;
  }
  getDistance() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

// 5. Product & Cart
export class Product {
  constructor(name, price) {
      this.name = name;
      this.price = price;
  }
}

export class Cart {
  constructor() {
      this.products = [];
  }
  addProduct(product) {
      this.products.push(product);
  }
  getTotal() {
      return this.products.reduce((sum, p) => sum + p.price, 0);
  }
}

// 6. Post
export class Post {
  constructor(title, content, likes = 0) {
      this.title = title;
      this.content = content;
      this.likes = likes;
  }
  like() {
      this.likes += 1;
  }
}

// 7. BankCard
export class BankCard {
  constructor(owner, balance, limit) {
      this.owner = owner;
      this.balance = balance;
      this.limit = limit;
  }
  withdraw(amount) {
      if (amount > this.limit || amount > this.balance) {
          console.log("Rad etildi");
      } else {
          this.balance -= amount;
          console.log(`Yangi balans: ${this.balance}`);
      }
  }
}

// 8. Grade
export class Grade {
  constructor(studentName, scores) {
      this.studentName = studentName;
      this.scores = scores;
  }
  getAverage() {
      const total = this.scores.reduce((sum, score) => sum + score, 0);
      return total / this.scores.length;
  }
  isPassed() {
      return this.getAverage() >= 60;
  }
}
