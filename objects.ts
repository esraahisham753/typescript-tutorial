/*const user = {
  name: "Esraa",
  email: "esraa@gmail.com",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Esraa", isPaid: true });

function createCourse(): { name: string, price: number } {
  return { name: "ReactJS", price: 399 };
}*/

/*type User = {
  name: string;
  email: string;
  isActive: boolean;
}*/

type User = {
  readonly _id: string
  name: string
  email: string
  isActive: boolean
  creditCardDetails?: number
}

let myUser: User = {
  _id: "123",
  name: "esraa",
  email: "esraa@gmail.com",
  isActive: false
}

//myUser._id = "456";

type CardNumber = {
  cardnumber: number
};

type CardDate = {
  carddate: string
};

type CardDetails = CardNumber & CardDate & {
  cvv: number
};

export {};
