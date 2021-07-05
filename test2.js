// Generics
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
// Feature in ts - allow us to reuse blocks of code with different types.
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
var addUID = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign({}, obj, { uid: uid });
};
// const addUID = <T extends object>(obj: T) => {
//     let uid = Math.floor(Math.random()*100);
//     return {...obj,uid};
// }
var docone = addUID({ name: 'yoshi', age: 40 });
var docTwo = addUID('hello');
console.log(docone.name);
var docThree = {
    uid: 1,
    resourceName: 'person',
    data: 'shaun'
};
var doc1 = {
    uid: 1,
    resourceType: 2,
    data: 'shaun'
};
var doc2 = {
    uid: 1,
    resourceType: 3,
    data: 'shaun'
};
//could create constants in ENUM to use these 2 & 3 value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
;
var doc3 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'shaun'
};
var doc4 = {
    uid: 1,
    resourceType: ResourceType.AUTHOR,
    data: 'shaun'
};
// Tuples
//to store a collection of values of varied types.
var arr = ['madhur', 24, true];
arr[0] = false;
arr[1] = 'Jain';
//let tup1 :[string, number, boolean] = [23, 'madhur', false];
var tup = ['madhur', 23, false];
//tup[0] =false;
tup[0] = 'Madhur';
tup[1] = 23;
var person;
person = ['madhur', 23];
//person = [23,'madhur'];
