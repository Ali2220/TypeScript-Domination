// Ek generic function getLastElement<T> likhein jo ek array leta hai aur array ka last element return kare.
// Agar array empty ho to undefined return kare.
function getFirstElement<T>(arr: T[]): T | undefined {
    if (arr.length === 0) {
        return undefined
    }

    return arr[0]
}

console.log("First element of [1,2,3,4]: ", getFirstElement([1, 2, 3, 4]));
console.log("First element of [a, b, c, d]: ", getFirstElement(["a", "b", "c", "d"]));
console.log(getFirstElement([]));

// Ek generic function reverseArray<T> likhein jo ek array leta hai aur uski reverse copy return kare (original array change nahi hona chahiye).

function reverseArray<T>(arr: T[]): T[] {
    return [...arr].reverse()
}

console.log(reverseArray([1, 2, 3]));

// Ek generic class Box banani hai jo kisi bhi type (T) ki ek value store kare. Us value ko get aur set kiya ja sake.

class Box<T> {
    private value: T

    constructor(value: T) {
        this.value = value
    }

    get(): T {
        return this.value
    }

    set(val: T): void {
        this.value = val
    }
}

let numberBox = new Box(10)
console.log(numberBox.get());
numberBox.set(20)
console.log(numberBox.get());

let stringBox = new Box("Ali")
console.log(stringBox.get());
stringBox.set("Ahsan")
console.log(stringBox.get());


// Ek generic class SimpleRepository banani hai jo array of T store kare. Usme add, getAll, getFirst methods honge.

class SimpleRepository<T> {
    private items: T[] = []

    add(item: T) {
        this.items.push(item)
    }

    getAll(): T[] {
        return this.items
    }

    getFirst(): T | undefined {
        return this.items[0]
    }
}

let repo = new SimpleRepository<string>()
repo.add("Book")
repo.add("Copy")
console.log(repo.getAll());
console.log(repo.getFirst());
