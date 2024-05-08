function addTwo(num: number): number {
  return num + 2;
}

function toUpper(val: string) {
  return val.toUpperCase();
}

function signUp(name: string, email: string, isPaid: boolean) {}

let login = (name, email, isPaid = false) => {};

let getHello = (s: string): string => {
  return `Hello ${s}`;
};

let consoleLog = (s: string): void => {
  console.log(`Hey! This is ${s}`);
};

let handleError = (errMsg: string): never => {
  throw Error(errMsg);
};

addTwo(4);

let myValue = addTwo(5);

toUpper("4");

signUp("esraa", "esraa@gmail.com", true);

login("esraa", "esraa@gmail.com");

getHello("Esraa");

consoleLog("myValue");

handleError("404 Not Found");

export {};
