//*************************************************************Call***************************************************************************** */

// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
// 	Car.call(this, "convertible", "petrol");
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
// 	Car.call(this, "convertible", "diesel");
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }

// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

// Call method changes the context of "this" in function. In above example, Function Car is called twice by Call method and their own contexts are
// passed using "this" as an argument.

//*************************************************************Apply***************************************************************************** */

// function Car(type, fuelType){
// 	this.type = type;
// 	this.fuelType = fuelType;
// }

// function setBrand(brand){
//   const args = ["convertible", "petrol"]
// 	Car.apply(this, args);
// 	this.brand = brand;
// 	console.log(`Car details = `, this);
// }

// function definePrice(price){
//   const args = ["convertible", "diesel"]
// 	Car.apply(this, args);
// 	this.price = price;
// 	console.log(`Car details = `, this);
// }


// const newBrand = new setBrand('Brand1');
// const newCarPrice = new definePrice(100000);

//*************************************************************Bind***************************************************************************** */
