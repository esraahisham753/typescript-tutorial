const user = {
  name: "Esraa",
  email: "esraa@gmail.com",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "Esraa", isPaid: true });

function createCourse(): { name: string, price: number } {
  return { name: "ReactJS", price: 399 };
}
