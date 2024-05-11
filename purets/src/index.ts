class User {
  readonly city: string = "Cairo";

  constructor(public email: string, public name: string, public userId: string) {
    
  }
}

const esraa = new User("esraa@gmail.com", "esraa", "123");
//esraa.city = "Alex";
