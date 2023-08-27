const accountId = 12345;
let accountName = "Naga kumar";
var accountEmail = "naga@gmail.com";
accountPassword = "123456qw";

//accountId = 121212; const not allowed
accountName = "java";
accountEmail = "jaya@gmail.com";
accountPassword = 21212121;

let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail, accountName, accountPassword, accountState]);
