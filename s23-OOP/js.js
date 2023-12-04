// let araba = {
//   renk: "mavi", //*içerdekilere property denir
//   hiz: 0,
// };

//! method

// let arba1 = {
//   renk: "mavi",
//   hiz: 0,
//   hizlandir: function (deger) {
//     this.hiz += deger;
//   },
// };

// arba1.hizlandir(30);
// console.log(arba1.hiz);

//! constructor function ES5
// function Araba(renk) {
//   //*arba bir sınıftır class gibi
//   this.renk = renk; //*bu bir constructor functiondur
//   this.hiz = 0;
// }

// Araba.prototype.hizlandir = function (deger) {
//   this.hiz += deger;
// };

// const araba = new Araba("red");
// console.log(araba.renk);
// araba.hizlandir(100);
// console.log(araba.hiz);

//! constructor function ES6
// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//   }
// }

// let araba = new Araba("siyah");
// console.log(araba.renk);

//! class ,claslar ES9 ile geldi
// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//     this.hiz = 0;
//   }

//   hizlandir(deger) {
//     this.hiz += deger;
//   }
// }

// let araba = new Araba("siyah");
// araba.hizlandir(100);
// console.log(araba.hiz);
// console.log(araba.renk);

//!Inheritance
// class Araba {
//   constructor(renk) {
//     this.renk = renk;
//   }
// }

// class MotorluAraba extends Araba {
//   constructor(renk, motor) {
//     super(renk); //*super ana sınıfın constructorını çalıştırır
//     this.motor = motor;
//   }
// }
// let araba = new Araba("red");

// let motorAraba = new MotorluAraba("siyah", "benzinli");
// console.log(motorAraba.renk);
// console.log(motorAraba.motor);
// console.log(araba.renk);

//!Encapsulation

// class Araba {
//   #renk;
//   constructor(renk, hiz) {
//     this.#renk = renk;
//     this.hiz = hiz;
//   }
//   getRenk() {
//     return this.#renk;
//   }

//   setRenk(renk) {
//     this.#renk = renk;
//   }
// }
// const araba = new Araba("siyah", 10);
// console.log(araba.getRenk());
// araba.setRenk("blue");
// console.log(araba.getRenk());

//!polymorphism
// class Shape {
//   draw() {
//     console.log("şekil çiziliyor");
//   }
// }

// class Circle extends Shape {
//   draw(radius) {
//     console.log(`${radius} yarıçaplı daire çiziliyor.`);
//   }
// }

// let shape = new Shape();
// let circle = new Circle();
// console.log(shape.draw());
// console.log(circle.draw("10"));

//!abstraction

class Databest {
  constructor(data) {
    this._data = data;
  }
  setData(data) {
    this._data = data;
  }

  getData() {
    return this._data;
  }
}
class Datacontroller extends Databest {
  constructor(data) {
    super(data);
  }
  getData() {
    return "Data:" + super.getData();
  }
}

const databese = new Databest("deneme");
const dataController = new Databest("deneme2");


console.log(databese._data);
dataController.setData("deneme3");
console.log(dataController._data);
