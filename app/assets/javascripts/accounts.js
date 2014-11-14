var accounts = { // variable called accounts - inside of it has 2 objects deposit and withdraw
  checking: { // inside checking has 2 methods called deposit and withdraw
    balance: 0,
    deposit: function (amount) {
      if (amount > 0) { // if the variable amount passed in is greater than 0 run this code
        accounts.checking.balance += amount; // add the amount into the balance
      }
    },
    withdraw: function (amount) {
      if (amount <= accounts.checking.balance) { // if the amount passed into withdraw is less than or equal to balance then you can run this code
        accounts.checking.balance -= amount; // withdraw the amount passed in
      }  else if ( amount < (accounts.savings.balance + accounts.checking.balance)) {
        var remainderBalance = amount - accounts.checking.balance;
        accounts.checking.balance = 0;
        var newAmount = accounts.savings.balance - remainderBalance;
        accounts.savings.balance -= amount;
        ATM.updateSavings();
      }
    }
  },

  savings: { // object inside accounts
    balance: 0,
    deposit: function (amount) { // function inside savings - deposit and withdraw
      accounts.savings.balance += amount;
    },

    withdraw: function (amount) { // function inside of savings
      if (amount <= accounts.savings.balance) {
        accounts.savings.balance -= amount;
      } else if (amount < (accounts.savings.balance + accounts.checking.balance)) {
        var remainderBalance = amount - accounts.savings.balance;
        accounts.savings.balance = 0;
        var newAmount = accounts.checking.balance - remainderBalance;
        accounts.checking.balance -= amount;
        ATM.updateChecking();

      }
    }
  }
};

var ATM; // created a variable called atm which allows us to access other variables which is otherwise unavailable because of scoping - ( creating nested attributes? )

$(document).ready(function () { // only allows these functions to be accessed when document has been loaded
  ATM = {
    ui: { // key value pairs inside ui allowing access for ids
      $checkingDeposit: $('#checkingDeposit'),
      $checkingWithdrawal: $('#checkingWithdraw'),
      $checkingAmount: $('#checkingAmount'),
      $checkingBalance: $('#balance1'),
      $checkingAccount: $('#checkingAccount'),

      $savingsDeposit: $('#savingsDeposit'),
      $savingsWithdrawal: $('#savingsWithdraw'),
      $savingsAmount: $('#savingsAmount'),
      $savingsBalance:  $('#balance2'),
      $savingsAccount: $('#savingsAccount')

    },

    updateChecking: function () { // function to update balance
      ATM.ui.$checkingBalance.text( '$' + accounts.checking.balance ); // moving balance to text and outputing
      ATM.ui.$checkingAmount.val(''); // retaining the checking amount value

      if (accounts.checking.balance === 0 ) { // if the balance is 0 run this code
        ATM.ui.$checkingAccount.addClass('zero'); // append class to #checkingAccount
      } else {
        ATM.ui.$checkingAccount.removeClass('zero'); // remove class from #checkingAccount
      }
    },

    updateSavings: function () {
      ATM.ui.$savingsBalance.text( '$' + accounts.savings.balance );
      ATM.ui.$savingsAmount.val('');

      if (accounts.savings.balance === 0 ) {
        ATM.ui.$savingsAccount.addClass('zero');
      } else {
        ATM.ui.$savingsAccount.removeClass('zero');
      }
    }
  };

  ATM.ui.$checkingDeposit.on('click', function () { // on click of the div class (not button) run this function on deposit
    var amount = parseInt(ATM.ui.$checkingAmount.val()); // return an integer of checking amount and retain the value and place it in the variable amount
    accounts.checking.deposit(amount); // passing the amount into the deposit function
    ATM.updateChecking(); // running the function of updateChecking on ATM
  });

  ATM.ui.$checkingWithdrawal.on('click', function () { // on click run function on checking withdrawal
    var amount = parseInt(ATM.ui.$checkingAmount.val()); // return integer of checking amount of retained value into variable amount
    accounts.checking.withdraw(amount); // passing the amount inside the withdraw function
    ATM.updateChecking(); //running function updateChecking
  });

  ATM.updateChecking();

  ATM.ui.$savingsDeposit.on('click', function () {
    var amount = parseInt(ATM.ui.$savingsAmount.val());
    accounts.savings.deposit(amount);
    ATM.updateSavings();
  });

  ATM.ui.$savingsWithdrawal.on('click', function (){
    var amount = parseInt(ATM.ui.$savingsAmount.val());
    accounts.savings.withdraw(amount);
    ATM.updateSavings();
  });

  ATM.updateSavings();

  //overdraft going both ways





});












