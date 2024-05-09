let score: string | number;

score = 44;
score = "55";

type User = {
    name: string
    id: string
};

type Admin = {
    userName: string
    id: string
};

let esraa: User | Admin = {name: "esraa", id: "1"};

esraa = {userName: "esraa", id: "1"};

let myArray: string[] = ["1", "2", "3"];
let myArray2: number[] = [1, 2, 3];
let myArray3: (string | number | boolean)[] = ["1", 2, true];

function getDBId(id: number | string) {
    if (typeof id === "string") {
        id = id.toUpperCase();
    }
}

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";


















export {};