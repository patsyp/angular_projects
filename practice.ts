// Comments are JS rewritten with typescript features.

myNum = 5;  //myNum: number = 5
myString = "Hello Universe";  //myString: string = 'Hello Universe'
myArr = [1,2,3,4]; //myArr: number[] = '[1, 2, 3, 4]'
myObj = { name:'Bill'};
anythingVariable = "Hey"; //anythingVariable: any = 'Hey'
anythingVariable = 25;  //anthingVariable = 25
arrayOne = [true, false, true, true]; //arrayOne: boolean[]='[true, false, true, true]'
arrayTwo = [1, 'abc', true, 2];//arrayTwo: any[]='[1, 'abc', true, 2]'
myObj = { x: 5, y: 10 };

// object constructor
MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());
myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);
// class SLNode {
//     val: number;
    
//     constructor(valueP: number){
//         this.val = valueP;
//     }
//     doSomethingFun(){
//         console.log("This is FUN!");
//     }
// }
// let firstSLNode = new SLNode(1);
// console.log(firstSLNode)

function myFunction() {
    console.log("Hello World");
    return;
}
//function myfunction(val: string): void{
//     console.log(val)
//     return;
// }

function sendingErrors() {
	throw new Error('Error message');
}
//function errorHandler(message: string): never{
//     throw new Error(message);
// }