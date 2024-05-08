"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function toUpper(val) {
    return val.toUpperCase();
}
function signUp(name, email, isPaid) { }
var login = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var getHello = function (s) {
    return "Hello ".concat(s);
};
var consoleLog = function (s) {
    console.log("Hey! This is ".concat(s));
};
var handleError = function (errMsg) {
    throw Error(errMsg);
};
addTwo(4);
var myValue = addTwo(5);
toUpper("4");
signUp("esraa", "esraa@gmail.com", true);
login("esraa", "esraa@gmail.com");
getHello("Esraa");
consoleLog("myValue");
handleError("404 Not Found");
