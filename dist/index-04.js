// Interfaces and Type Aliases
//  Interfaces and Type Aliases are both ways to define a custom type.
function maybeGetUserInfoTwo() {
    if (Math.random() > 0.5) {
        return ['success', { name: 'John', email: 'john@john.com' }];
    }
    else {
        return ['failure', new Error('Something went wrong')];
    }
}
const newYearsEve = Object.assign(new Date(), {
    getReason() { return 'New Year'; }
});
console.log(newYearsEve.getDay());
console.log(newYearsEve.getReason());
function printContactInfo(info) {
    console.log(info);
    console.log(info.email);
}
printContactInfo({ name: 'John', email: 'john@john.com', phone: '555-555-5555' });
function careForDog(dog) {
    console.log(dog.isAlive() ? 'Dog is alive' : 'Dog is dead');
    console.log('Fur Color:', dog.getFurOrHairColor());
    console.log('Breed:', dog.getBreed());
}
const myDog = {
    isAlive: () => true,
    getFurOrHairColor: () => 'brown',
    getBreed: () => 'Labrador Retriever',
};
careForDog(myDog);
// This class implements the AnimalLike interface, which means that it must
//  have an eat method.  If it does not, the compiler will throw an error.
class Doggo {
    bark = () => console.log('woof');
    eat = (food) => console.log('yum,', food);
}
const doggo = new Doggo();
doggo.eat('cheese');
