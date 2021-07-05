// Generics

// Feature in ts - allow us to reuse blocks of code with different types.

// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj,uid};

// }

const addUID = <T>(obj: T) => {
    let uid = Math.floor(Math.random()*100);
    return {...obj,uid};

}

// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj,uid};

// }

let docone = addUID({name:'yoshi',age:40});
let docTwo = addUID('hello');

console.log(docone.name);



// Generics with interface

interface Resource <T> {
    uid :number;
    resourceName : string;
    data : T;
}

const docThree: Resource <string> = {
    uid:1,
    resourceName: 'person',
    data: 'shaun'
}

// ENUMS
// special type in TS
// allows to store set of constants or keywords to use.

interface Resource2 <T> {
    uid :number;
    resourceType : number;
    data : T;
}

const doc1: Resource2 <string> = {
    uid:1,
    resourceType: 2,
    data: 'shaun'
}

const doc2: Resource2 <string> = {
    uid:1,
    resourceType: 3,
    data: 'shaun'
}


//could create constants in ENUM to use these 2 & 3 value

enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON};

interface Resource3 <T> {
    uid :number;
    resourceType : ResourceType;
    data : T;
}

const doc3: Resource3 <string> = {
    uid:1,
    resourceType: ResourceType.BOOK,
    data: 'shaun'
}

const doc4: Resource3 <string> = {
    uid:1,
    resourceType: ResourceType.AUTHOR,
    data: 'shaun'
}


// Tuples
//to store a collection of values of varied types.

let arr = ['madhur', 24, true];
arr[0]=false;
arr[1]='Jain';

//let tup1 :[string, number, boolean] = [24, 'madhur', false];
let tup :[string, number, boolean] = ['madhur', 23, false];
//tup[0] =false;
//tup[0] = 'Madhur';
tup[1] = 23;


let person :[string, number];
person = ['madhur',23];
//person = [23,'madhur'];

