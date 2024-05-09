let user: [string, number, boolean];
user = ["esraa", 1, true];

let rgb: [number, number, number] = [255, 123, 220];

type TUser = [number, string];

let tUser: TUser = [1, "esraa"];

tUser[1] = "es";

//tUser.push(true);

export {};