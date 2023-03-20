console.log("Classes");

console.log("Basic class");

class Coder {
    name: string; //Property 'name' has no initializer and is not definitely assigned in the constructor.
    music: string;
    age: number;
    lang: string;


    constructor(
        name: string,
        music: string,
        age: number,
        lang: string
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
}

class modifiedCoder {

    secondLang!: string // adding assertion this means this is not initilized in the constructor right away.


    constructor(
        public readonly name: string,
        public music: string,
        private age: number,
        protected lang: string = "TypeScript" //default parameter

        //Private variables cannot be accessed outside the class.
        //Protected variables can be accessed by the derived classes.

    ) {
        // this.name = name;        // Assignments in the body of the
        // this.music = music;      // constructor are not required here.
        // this.age = age;          // It is not an error if you leave them 
        // this.lang = lang;        // but,it is not required here
    }

    //class method
    public getAge() {
        return `Hello, I'm ${this.age} years old`
    }
}


// call the class
console.log("create class instance");

const Dave = new modifiedCoder('Dave', 'Rock', 42)
console.log(Dave.getAge());
// console.log(Dave.age);  //Property 'age' is private and only accessible within class 'modifiedCoder'.
// console.log(Dave.lang); //Property 'lang' is protected and only accessible within class 'modifiedCoder' and its subclasses.

console.log("Extending class");

class webDev extends modifiedCoder {
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {
        super(name, music, age)
        // this.computer = computer
    }
    public getLang() {
        return `I code in ${this.lang} language`
    }
}

const Sara = new webDev("Mac", "Sara", "Lo-Fi", 25)
console.log(Sara);
console.log(Sara.getLang());
//console.log(Sara.age); //Property 'age' is private and only accessible within class 'modifiedCoder'.


console.log("interfacing the class");

interface musician {
    name: string,
    instruments: string
}

class guitarist implements musician {
    name: string
    // name: number // Type 'number' is not assignable to type 'string'.
    instruments: string

    constructor(
        name: string,
        instruments: string
    ) {
        this.name = name
        this.instruments = instruments
    }
    public play(action: string) {
        return `${this.name} ${action} the ${this.instruments}.`
    }
}

const Page = new guitarist('Jimmy', 'Guitar')
console.log(Page.play('Strums'));


console.log("static keyword");

//Static keyword indicates that variable does not refer to any instanciation of the class but 
// it is directly instantiated to the class itself.

class Peeps {
    static count: number = 0;

    static getCount(): number {
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string) {
        this.name = name
        this.id = ++Peeps.count
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(Peeps.count);
console.log(John.id);
console.log(Steve.id);
console.log(Amy.id);


console.log("Getters and setters");

class Bands {
    private getState: string[];

    constructor() {
        this.getState = [];
    }

    public get data(): string[] {
        return this.getState
    }

    public set data(value: string[]) {
        if (Array.isArray(value) && value.every(val => typeof val === 'string')) {
            // return this.getState = value; //Setters cannot return a value.
            this.getState = value;
            return
        }else throw new Error ("Params are invalid")
    }
}

const myBands = new Bands();
myBands.data = ["Neil Young", 'Led Zep']
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"]
console.log(myBands.data);

// myBands.data = [12]          //Type 'number' is not assignable to type 'string'.
// myBands.data = "hello world"    //Type 'string' is not assignable to type 'string[]'.
