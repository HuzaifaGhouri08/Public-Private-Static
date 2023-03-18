class BankAccount {
  // private field
  #balance;

  constructor(accountNumber, name, balance) {

    this.accountNumber = accountNumber;
    this.name = name;
    this.#balance = balance; 
    // Private Property
  }

  // Getter Method
  get balance() { 
    return this.#balance;
  }
 
  // Setter Method
  set balance(amount){ 
    console.log(`your opening balance is ${amount}`)
    if (isNaN(amount)) {
      throw new Error('Amount is InValid');
  }
  this.#balance = amount;
  }
  
  // Deposit (Public Methods)
  deposit(amount) {
    this.#balance += amount;
    console.log(`your amount ${amount} is successfully deposited. New balance is ${this.#balance}`);
  }
 
  // Withdrawal 
  withdraw(amount) {
    if (amount > this.#balance) {
      console.log(`Insufficient balance. Current balance is ${this.#balance}`);
    } 
    // Minimum Requirment
    else if(amount < 500){
      console.log(`minimum withdrawal amount is 500. Current balance is ${this.#balance}`);
    }
    else {
      this.#balance -= amount;
      console.log(`Withdrawal of ${amount} successful. New balance: ${this.#balance}`);
    }
  }

  // Unique Acc No for All Users
  // Static Method
  static generateAccountNumber() {
    return 'ACCT- ' + Math.random().toString(14).substr(2, 10).toUpperCase();
  }
 
}
 
// Current Account
class CurrentAccount extends BankAccount {
  // Transaction Limit #Private
  #transactionLimit = 10000;

  deposit(amount) {
    super.deposit(amount);
  }

  withdraw(amount) {
    if (amount > this.#transactionLimit) {
      console.log(`Withdrawal limit exceeded. Maximum withdrawal amount is ${this.#transactionLimit}`);
    } else {
      super.withdraw(amount);
    }
  }
}

// Saving Account
class SavingsAccount extends BankAccount {
  // Transaction Limit #Private
  #transactionLimit = 5000;

  deposit(amount) {
    super.deposit(amount);
  }

  withdraw(amount) {
    // maximum Limit
    if (amount > this.#transactionLimit) {
      console.log(`Withdrawal limit exceeded. Maximum withdrawal amount is ${this.#transactionLimit}`);
    } else {
      super.withdraw(amount);
    }
  }
}


// Users Object / There are three types of account 
const user1 = new BankAccount(BankAccount.generateAccountNumber(), "huzaifa", 0);
const user2 = new BankAccount(BankAccount.generateAccountNumber(), "Mustufa", 0);
const user3 = new CurrentAccount(BankAccount.generateAccountNumber(), "taha", 0);
const user4 = new SavingsAccount(BankAccount.generateAccountNumber(), "salman", 0);
const user5 = new SavingsAccount(BankAccount.generateAccountNumber(), "maaz", 0);

// CONDITION (1)
user1.balance = 1000; 
// your opening balance is 1000
console.log(`your name ${user1.name} with account number ` + BankAccount.generateAccountNumber()); 
// your name huzaifa with account number ACCT- 605B490B2D
user1.deposit(20000); 
// your amount 20000 is successfully deposited. New balance is 21000
user1.withdraw(20500); 
// Withdrawal of 20500 successful. New balance: 500


// CONDITION (2)
user2.balance = 500; 
//your opening balance is 500
console.log(`your name ${user2.name} with account number ` + BankAccount.generateAccountNumber()); 
// your name Mustufa with account number ACCT- 651CD7D89B
user2.deposit(2000); 
// your amount 2000 is successfully deposited. New balance is 2500
user2.withdraw(5000); 
//Insufficient balance. Current balance is 2500


// CONDITION (3)
user3.balance = 10000; 
//your opening balance is 10000
console.log(`your name ${user3.name} with account number ` + BankAccount.generateAccountNumber()); 
//your name taha with account number ACCT- 72152D534C
user3.deposit(20000); 
//your amount 20000 is successfully deposited. New balance is 30000
user3.withdraw(11000); 
// Withdrawal limit exceeded. Maximum withdrawal amount is 10000


// CONDITION (4)
user4.balance = 800; 
// your opening balance is 800
console.log(`your name ${user4.name} with account number ` + BankAccount.generateAccountNumber()); 
// your name salman with account number ACCT- 69D1890867
user4.deposit(9000); 
// your amount 9000 is successfully deposited. New balance is 9800
user4.withdraw(499); 
//minimum withdrawal amount is 500. Current balance is 9800
