/**

 */

//Define Bank Account class and it's properties and operations
var bankAccount = function (accountNumber, accountType, holdersName, holdersDOB, holderPhoneNo, balance, atmPin ) {
    
    //Define properties
    this.accountNumber = accountNumber
    this.accountType = accountType
    this.holdersName = holdersName
    this.holdersDOB = holdersDOB
    this.holderPhoneNo = holderPhoneNo
    this.balance = balance
    this.atmPin = atmPin
    
    //Define Check balance method
    this.checkBalance =()=> {
        console.log(`Your account balance is ${this.balance}`)
        return this.balance
    }

   //Define Withdraw method 
   this.withdraw = desiredWithdraw => {

        if (this.balance <= desiredWithdraw) {
            console.log("You have insufficient funds")
            return "You have insufficient funds"
        } else {
            this.balance -= desiredWithdraw;
            console.log(`You have Withdrew ${desiredWithdraw}: New balance is ${this.balance}`);
            return this.balance
        }
    }

    //Define Deposit Method
    this.deposit = depositMoney => {
        this.balance += depositMoney ;
        console.log(`You have deposited ${depositMoney}: New balance is ${this.balance}`)
        return this.balance
    }

    // Define Change Pin method
    this.changePin = enterPin => {
        if(enterPin === this.atmPin){
            console.log('You can now change your pin number')
            return 'You can change your pin number'
        } else {
            console.log('Enter correct pin to get new pin')
            return 'Enter old pin number'
        }
    }
}

//Create a new instance of object bakerSentamu from class bank account
let bakerSentamu = new bankAccount(1036200909726, 'Savings', 'Baker Sentamu', '1989', 0774656364, 60000, 1234)


//Invoke withdraw method on new object bakerSentamu
bakerSentamu.withdraw(50000)

//Invoke Check Balance method
bakerSentamu.checkBalance()

//Invoke Deposit method
bakerSentamu.deposit(130000)

//Invoke Change Pin Method
bakerSentamu.changePin(6284)