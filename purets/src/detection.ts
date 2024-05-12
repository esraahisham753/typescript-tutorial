function getVal(val: string | number) {
  if (typeof val === "string") {
    return val.toLowerCase();
  }

  return val + 3;
}

function printAll(strs: string | string[] | null) {
  if (!strs) {
    return "no input provided";
  } else if (typeof strs === "object") {
    strs.forEach((str) => console.log(str));
  } else {
    console.log(strs);
  }
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

function convertDate(myDate: Date | string) {
  if (myDate instanceof Date) {
    return myDate.toUTCString();
  }
}

type Fish = {
  name: string;
  swim: () => void;
};

type Bird = {
  name: string;
  fly: () => void;
};

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function feedPet(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    console.log("Feed fish");
  } else {
    pet;
    console.log("Feed bird");
  }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

interface Rectangle {
    kind: "rectangle";
    length: number;
    width: number;
}

type Shape = Circle | Square | Rectangle;

function processShape(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    
    //return shape.side * shape.side;
}

function getArea(shape: Shape): number {
    switch(shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultShape: never = shape;
            return _defaultShape;
    }
}
