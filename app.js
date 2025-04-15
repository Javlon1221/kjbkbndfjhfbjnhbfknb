// 1. ShopProduct
class ShopProduct {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = price;
      this.quantity = quantity;
    }
  
    getTotalPrice() {
      return this.price * this.quantity;
    }
  }
  
  console.log("1. ShopProduct:");
  const product1 = new ShopProduct("Olma", 5000, 4);
  console.log(`Jami narx: ${product1.getTotalPrice()} so'm\n`);
  
  
  // 2. Timer
  class Timer {
    constructor(seconds) {
      this.seconds = seconds;
    }
  
    start() {
      for (let i = 1; i <= this.seconds; i++) {
        setTimeout(() => {
          console.log(`${i} sekund o'tdi`);
        }, i * 1000);
      }
    }
  }
  
  console.log("2. Timer:");
  const timer = new Timer(3);
  timer.start(); // Bu 1s, 2s, 3s da chiqadi asinxron
  
  
  // 3. Flight
  class Flight {
    constructor(from, to, duration) {
      this.from = from;
      this.to = to;
      this.duration = duration;
    }
  
    getInfo() {
      return `${this.from} ➜ ${this.to} (${this.duration} soat)`;
    }
  }
  
  console.log("3. Flight:");
  const flight = new Flight("Toshkent", "Istanbul", 5);
  console.log(flight.getInfo(), "\n");
  
  
  // 4. Point
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    getDistance() {
      return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
  }
  
  console.log("4. Point:");
  const point = new Point(3, 4);
  console.log(`Masofa: ${point.getDistance()}\n`);
  
  
  // 5. Product va Cart
  class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  
  class Cart {
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
  
  console.log("5. Product va Cart:");
  const prod1 = new Product("Kitob", 20000);
  const prod2 = new Product("Ruchka", 5000);
  const cart = new Cart();
  cart.addProduct(prod1);
  cart.addProduct(prod2);
  console.log(`Jami savat qiymati: ${cart.getTotal()} so'm\n`);
  
  
  // 6. Post
  class Post {
    constructor(title, content, likes = 0) {
      this.title = title;
      this.content = content;
      this.likes = likes;
    }
  
    like() {
      this.likes += 1;
    }
  }
  
  console.log("6. Post:");
  const post = new Post("Sarlavha", "Bu post mazmuni", 10);
  post.like();
  post.like();
  console.log(`Postdagi layklar soni: ${post.likes}\n`);
  
  
  // 7. BankCard
  class BankCard {
    constructor(owner, balance, limit) {
      this.owner = owner;
      this.balance = balance;
      this.limit = limit;
    }
  
    withdraw(amount) {
      if (amount > this.limit || amount > this.balance) {
        console.log("Amal rad etildi");
      } else {
        this.balance -= amount;
        console.log(`${amount} yechildi, yangi balans: ${this.balance}`);
      }
    }
  }
  
  console.log("7. BankCard:");
  const card = new BankCard("Javlon", 100000, 50000);
  card.withdraw(30000); // OK
  card.withdraw(60000); // Rad etiladi
  console.log("");
  
  
  // 8. Grade
  class Grade {
    constructor(studentName, scores) {
      this.studentName = studentName;
      this.scores = scores;
    }
  
    getAverage() {
      const total = this.scores.reduce((a, b) => a + b, 0);
      return total / this.scores.length;
    }
  
    isPassed() {
      return this.getAverage() > 60;
    }
  }
  
  console.log("8. Grade:");
  const grade = new Grade("Ali", [70, 80, 60, 90]);
  console.log(`O'rtacha baho: ${grade.getAverage()}`);
  console.log(`Imtihondan o'tdi: ${grade.isPassed() ? "Ha" : "Yo'q"}`);
  