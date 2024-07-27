class Account {
    #balance;
    constructor(balance) {
        this.#balance = balance;
        console.log(this.#balance);
    }
    deposit(money) {
        this.#balance += money;
    }
    withDraw(money) {
        this.#balance -= money;
    }
    accountBalance() {
        console.log(this.#balance);
    }

}

const account1= new Account(1000987);

//Task 10

account1.withDraw(199999)
account1.accountBalance();
account1.deposit(20987);
account1.accountBalance();

//This is only for check