//Enumeration: data type - holds a constant value
//numeric
//string
//heterogenous
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = getBrowser('Chrome')] = "Chrome";
    Browser[Browser["Safari"] = 33] = "Safari";
    Browser[Browser["Firefox"] = getBrowser('Firefox')] = "Firefox";
    // 'Safari',                                    //consecutive value need to be intialised               
})(Browser || (Browser = {}));
function getBrowser(getBrowser) {
    if (getBrowser === "Chrome") {
        return 115;
    }
    return 1;
}
console.log(Browser.Chrome);
// console.log(Browser)
console.log(Browser.Firefox);
var Environment;
(function (Environment) {
    Environment["QA"] = "qa";
    Environment["DEV"] = "dev";
    Environment["STAGE"] = "stage";
})(Environment || (Environment = {}));
console.log(Environment.QA);
console.log(Environment['DEV']);
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status[Status["DEACTIVATE"] = 1] = "DEACTIVATE";
    Status[Status["INACTIVATE"] = 2] = "INACTIVATE";
})(Status || (Status = {}));
console.log(Status.ACTIVE);
console.log(Status.DEACTIVATE);
console.log(Status.INACTIVATE);
