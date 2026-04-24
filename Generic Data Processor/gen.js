"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Ek generic function getLastElement<T> likhein jo ek array leta hai aur array ka last element return kare.
// Agar array empty ho to undefined return kare.
function getFirstElement(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    return arr[0];
}
console.log("First element of [1,2,3,4]: ", getFirstElement([1, 2, 3, 4]));
console.log("First element of [a, b, c, d]: ", getFirstElement(["a", "b", "c", "d"]));
console.log(getFirstElement([]));
// Ek generic function reverseArray<T> likhein jo ek array leta hai aur uski reverse copy return kare (original array change nahi hona chahiye).
function reverseArray(arr) {
    return [...arr].reverse();
}
console.log(reverseArray([1, 2, 3]));
// Ek generic class Box banani hai jo kisi bhi type (T) ki ek value store kare. Us value ko get aur set kiya ja sake.
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    get() {
        return this.value;
    }
    set(val) {
        this.value = val;
    }
}
let numberBox = new Box(10);
console.log(numberBox.get());
numberBox.set(20);
console.log(numberBox.get());
let stringBox = new Box("Ali");
console.log(stringBox.get());
stringBox.set("Ahsan");
console.log(stringBox.get());
// Ek generic class SimpleRepository banani hai jo array of T store kare. Usme add, getAll, getFirst methods honge.
class SimpleRepository {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getAll() {
        return this.items;
    }
    getFirst() {
        return this.items[0];
    }
}
let repo = new SimpleRepository();
repo.add("Book");
repo.add("Copy");
console.log(repo.getAll());
console.log(repo.getFirst());
//# sourceMappingURL=gen.js.map