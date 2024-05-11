class User {
  readonly city: string = "Cairo";
  protected _courseCount: number = 1;

  constructor(
    public email: string,
    public name: string
  ) //private userId: string
  {}

  get getAppleEmail(): string {
    return `Apple${this.email}`
  }

  get courseCount(): number {
    return this._courseCount;
  }

  set courseCount(count: number) {
    if (count <= 1) {
      throw Error("Course Count should be more than one");
    }
    this._courseCount = count;
  }
}

class SubUser extends User {
  isFamily: boolean = true;

  changeCourseCount(): void {
    this._courseCount += 1;
  }
}

const esraa = new User("esraa@gmail.com", "esraa");
//esraa.city = "Alex";
