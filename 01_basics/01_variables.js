const accountId = 1234
let accountEmail = "ahbc@gmail.com"
var accountPassword = "123445"
accountCity = "Mumbai"
let accountState;

// accountId = 2 Not allowed

console.log(accountId);

// prefer not to use var because of block scope and functional scope

accountEmail  = "ajdh@gmail.com"
accountPassword = "777"
accountCity = "bengaluru"
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
