interface User {
    userId: number,
    readonly dbId: number,
    googleToken?: string,
    email: string,
    name: string,
    startTrial(): string,
    getCouponNumber(name: string, off: number): number  
};

interface User {
    githubToken: string
};

interface Admin extends User {
    role: "admin" | "ta" | "learner"
};

const me: Admin = {
    userId: 22,
    dbId: 2222,
    email: "esraa@gmail.com",
    name: "esraa",
    startTrial: () => {return "Trial started"},
    getCouponNumber: (name: "esraa", off: 10) => {return 123}, 
    githubToken: "123xyz",
    role: "admin"
};

me.email = "e@e.com";

export {};