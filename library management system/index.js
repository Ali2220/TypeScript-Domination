"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LibraryItem {
    id;
    title;
    isBorrowed = false;
    dueDate = null;
    constructor(id, title) {
        this.id = id;
        this.title = title;
    }
    borrow(days) {
        if (this.isBorrowed) {
            console.log(`${this.title} already Borrowed`);
            return;
        }
        this.isBorrowed = true;
        this.dueDate = new Date();
        this.dueDate.setDate(this.dueDate.getDate() + days);
        console.log(`${this.title} borrowed. Return by: ${this.dueDate.toDateString()}`);
    }
    returnItem(returnDate) {
        if (!this.isBorrowed) {
            console.log(`${this.title} was not borrowed`);
            return 0;
        }
        let fine = 0;
        if (this.dueDate && returnDate > this.dueDate) {
            const daysLate = Math.ceil((returnDate.getTime() - this.dueDate.getTime()) / (1000 * 3600 * 24));
            fine = daysLate * 5; // Rs 5 per day late
            console.log(`${this.title} is ${daysLate} days late. Fine: Rs ${fine}`);
        }
        else {
            console.log(`${this.title} returned on time`);
        }
        this.isBorrowed = false;
        this.dueDate = null;
        return fine;
    }
}
class Book extends LibraryItem {
    author;
    constructor(id, title, author) {
        super(id, title);
        this.author = author;
    }
}
class Magazine extends LibraryItem {
    issueNumber;
    constructor(id, title, issueNumber) {
        super(id, title);
        this.issueNumber = issueNumber;
    }
}
class Member {
    name;
    memberId;
    borrowedItems = [];
    constructor(name, memberId) {
        this.name = name;
        this.memberId = memberId;
    }
    canBorrow() {
        return this.borrowedItems.length < 2;
    }
    borrowItem(item, days) {
        if (!this.canBorrow()) {
            console.log(`${this.name} cannot borrow more than 2 items.`);
            return false;
        }
        if (item.isBorrowed) {
            console.log(`${item.title} already taken`);
            return false;
        }
        item.borrow(days);
        this.borrowedItems.push(item);
        console.log(`${this.name} borrowed "${item.title}"`);
        return true;
    }
    returnItem(item, returnDate) {
        const index = this.borrowedItems.findIndex(i => i.id === item.id);
        if (index === -1) {
            console.log(`${this.name} has not borrwed ${item.title}`);
            return 0;
        }
        const fine = item.returnItem(returnDate);
        this.borrowedItems.splice(index, 1);
        console.log(`${this.name} returned ${item.title}`);
        return fine;
    }
}
class Librarian {
    name;
    employeeId;
    static libraryName = "Ali Ki Library";
    static totalItems = 0;
    constructor(name, employeeId) {
        this.name = name;
        this.employeeId = employeeId;
    }
    static getLibraryHours() {
        return `10 AM to 8 PM`;
    }
    addItemToCatalog(item) {
        Librarian.totalItems++;
        console.log(`Item added to Catalog. Total Item are: ${Librarian.totalItems}`);
    }
    registerMember(member) {
        console.log(`${this.name} registered member: ${member.name} (ID: ${member.memberId})`);
    }
}
function runLibrary() {
    console.log("Welcome to Sheikh Ali Sarwar Library!");
    let librarian = new Librarian('Ali', 21054);
    console.log(`Librarian: ${librarian.name}`);
    console.log(`Library hours: ${Librarian.getLibraryHours()}\n`);
    let book1 = new Book(1, "The Alchemist", "Paulo Coelho");
    let book2 = new Book(2, "1984", "George Orwell");
    let mag1 = new Magazine(3, "Time Magazine", 101);
    librarian.addItemToCatalog(book1);
    librarian.addItemToCatalog(book2);
    librarian.addItemToCatalog(mag1);
    let member = new Member('Sara', "M001");
    librarian.registerMember(member);
    console.log("\n--- BORROWING PROCESS ---");
    const today = new Date();
    // borrow book1 for 5 days
    member.borrowItem(book1, 5);
    // Simulate return after 7 days (late)
    const returnDate = new Date();
    returnDate.setDate(today.getDate() + 7);
    console.log(`\nReturning after 7 days (due was 5 days)`);
    member.returnItem(book1, returnDate);
    // Borrow magazine for 3 days
    member.borrowItem(mag1, 3);
    // Return magazine on time
    const onTimeReturn = new Date();
    onTimeReturn.setDate(today.getDate() + 3);
    console.log(`\nReturning magazine on time`);
    member.returnItem(mag1, onTimeReturn);
    console.log(`\nThank you for using ${Librarian.libraryName}`);
}
runLibrary();
//# sourceMappingURL=index.js.map