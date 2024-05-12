const scores: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: number | boolean) : number | boolean {
    return val;
}

function identityTwo(val: any) : any {
    return val;
}

function identityThree<Type>(val: Type) : Type {
    return val;
}

identityThree(true);

function identityFour<T>(val: T) : T {
    return val;
}

function getSearchProducts<T>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}

function anotherFunction<T, U extends number>(oneVal: T, twoVal: U): object {
    return {
        oneVal,
        twoVal
    };
}

//anotherFunction("a", "b");

interface Quiz {
    name: string;
    type: string;
}

interface Course {
    name: string;
    author: string;
    subject: string;
}

class Sellable<T> {
    public cart: T[] = [];

    addToCart(product: T) {
        this.cart.push(product);
    }
}