
abstract class Vehicle{
    
    constructor(
        private _name:string,//Toyota Corolla
        private _model: string,//E210
        private _year: number,//2018
        private _rented: boolean= false//true
    ){}
    get name(){
return this._name
    }
    set name(Newname: string){
        if(!Newname){
            throw new Error("It can't be empty!");
        }
        this._name=Newname;
    }
    get model(){
        return this._model
    }
    set model(Newmodel:string){
        if(!Newmodel){
            throw new Error("It can't be empty!")
        }
        this._model=Newmodel;
    }
    get year(){
        return this._year
    }
    set year(Newyear:number){
        if(!Newyear){
            throw new Error("It can't be empty!")
        }
        this._year=Newyear;
    }
    isRented(): boolean {
        return this._rented;
    }

    setRented(rented: boolean): void {
        this._rented = rented;
    }
    abstract rentalRate(): number;

    rent(): void {
        if (this._rented) {
            console.log(`${this._name} ${this._model} is already rented.`);
        } else {
            this._rented = true;
            console.log(`You have rented this ${this._name} ${this.model}.`);
        }
    }

    returnVehicle(): void {
        if (this._rented) {
            this._rented = false;
            console.log(`You have returned this ${this._name} ${this._model}. Thank you for using our service!`);
        } else {
            console.log(`This ${this._name} ${this._model} has not been rented.`);
        }
    }

}
class Car extends Vehicle {
    private numDoors: number;

    constructor(_name: string, _model: string, _year: number, numDoors: number) {
        super(_name, _model, _year);
        this.numDoors = numDoors;
    }

    rentalRate(): number {
        return 50;
    }

    getNumDoors(): number {
        return this.numDoors;
    }
    
}
class Truck extends Vehicle {
    private cargoCapacity: number;

    constructor(_name: string, _model: string, _year: number, cargoCapacity: number) {
        super(_name, _model, _year);
        this.cargoCapacity = cargoCapacity;
    }

    rentalRate(): number {
        return 75;
    }

    getCargoCapacity(): number {
        return this.cargoCapacity;
    }
}
class Motorcycle extends Vehicle {
    private engineSize: number;

    constructor(_name: string, _model: string, _year: number, engineSize: number) {
        super(_name, _model, _year);
        this.engineSize = engineSize;
    }

    rentalRate(): number {
        return 35;
    }

    getEngineSize(): number {
        return this.engineSize;
    }
}
const car1 = new Car('Toyota', 'Corolla', 2018, 4);
console.log(car1.name); // Toyota
console.log(car1.model); // Corolla
console.log(car1.year); // 2018
console.log(car1.getNumDoors()); // 4
console.log(car1.isRented()); // false
car1.rent(); // You have rented this Toyota Corolla.
console.log(car1.isRented()); // true
car1.returnVehicle(); // You have returned this Toyota Corolla. Thank you for using our service!
console.log(car1.isRented()); // false
console.log("-----------------");
const truck1 = new Truck('Suzuki', 'Truck', 2016, 2);
console.log(truck1.name); // Toyota
console.log(truck1.model); // Corolla
console.log(truck1.year); // 2018
console.log(truck1.getCargoCapacity()); // 4
console.log(truck1.isRented()); // false
truck1.rent(); // You have rented this Toyota Corolla.
console.log(truck1.isRented()); // true
truck1.returnVehicle(); // You have returned this Toyota Corolla. Thank you for using our service!
console.log(truck1.isRented()); // false
console.log("-----------------");
const Motorcycle1 = new Motorcycle('Honda', '125CC', 2013, 0);
console.log(Motorcycle1.name); // Toyota
console.log(Motorcycle1.model); // Corolla
console.log(Motorcycle1.year); // 2018
console.log(Motorcycle1.getEngineSize()); // 4
console.log(Motorcycle1.isRented()); // false
Motorcycle1.rent(); // You have rented this Toyota Corolla.
console.log(Motorcycle1.isRented()); // true
Motorcycle1.returnVehicle(); // You have returned this Toyota Corolla. Thank you for using our service!
console.log(Motorcycle1.isRented()); // false