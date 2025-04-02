// Library Management System using OOP in JavaScript

// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;  // Default value
    }

    borrowBook() {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log(`${this.title} has been borrowed.`);
        } else {
            console.log(`${this.title} is not available.`);
        }
    }

    returnBook() {
        this.isAvailable = true;
        console.log(`${this.title} has been returned.`);
    }
}

// User Class
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.borrowedBooks = [];
    }

    borrow(book) {
        if (book.isAvailable) {
            book.borrowBook();
            this.borrowedBooks.push(book);
            console.log(`${this.name} borrowed "${book.title}".`);
        } else {
            console.log(`Sorry, "${book.title}" is already borrowed.`);
        }
    }

    return(book) {
        let index = this.borrowedBooks.indexOf(book);
        if (index !== -1) {
            this.borrowedBooks.splice(index, 1); // Remove book from user's list
            book.returnBook();  // This already prints "The Great Gatsby has been returned."
        } else {
            console.log(`${this.name} does not have "${book.title}".`);
        }
    }
    
}

// Testing the System
console.log("\n--- Library Management System Test ---");

// Creating book instances
let book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "123456");
let book2 = new Book("1984", "George Orwell", "654321");

// Creating user instances
let user1 = new User("Alice", 101);
let user2 = new User("Bob", 102);

// Borrowing and returning books
user1.borrow(book1); // Alice borrows "The Great Gatsby"
user2.borrow(book1); // Bob tries to borrow "The Great Gatsby" (should fail)
user1.return(book1); // Alice returns "The Great Gatsby"
user2.borrow(book1); // Bob borrows "The Great Gatsby"
