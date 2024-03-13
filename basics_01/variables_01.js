const accountid = 112233;
let accountemail = "dheeru@gmail.com";
var accountpassword = "0000";
let accountcity = "jamnagar";
let accountstate;

// You can't reassign a constant variable, so this line will throw an error
// accountid = 12345;

// Modifying the values of the variables
accountemail = "dj@djgmail.com";
accountpassword = "1111";
accountcity = "jabalpur";

// prefer not to use var

console.log(accountid);
console.table([accountid, accountemail, accountpassword, accountcity, accountstate]);