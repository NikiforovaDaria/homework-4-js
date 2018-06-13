//1) Write largest and smallest functions that returns the largest and smallest number passed like a argument.

const largest = (arr) => {
    const answerMax = Math.max.apply(this, arr);
    return answerMax;
}

const smallest = (arr) => {
    const answerMin = Math.min.apply(this, arr)
    return answerMin
}

largest(2, 0.1, -5, 100, 3) // 100
smallest(2, 0.1, -5, 100, 3) // -5

//2) Write function transform that will transform array of numbers to array of functions that will return value from a base array.
const transform = (array) => {
    return array.map((value) =>
        () => {
            return value
        })
}

const baseArray = [10, 20, 30, 40];
const newArr2 = transform(baseArray)
console.log(newArr2[2]())


//3) Write function sum.Function expects arbitrary number of digit arguments and returns compound value of them.
const sum = (...num) => {
    if (num.length === 0) return 0;
    return (num.length == 1) ?
        num[0] :
        num[0] + sum(...num.slice(1));
}
console.log(sum(10, 3, 10, 7));

//4) Write function countDown.Function expects number and logs values one by one till zero with one second delay.
const countdown = (value) => {
    let num = value;
    console.log(num)
    return (num > 0) ?
        setTimeout(() => countdown(num - 1), 1000) :
        num;
};
countdown(3);

//5) Write a polyfill for a.bind() function and save it in Function.prototype.myBind().myBind() should work in an exact
//same way as the usual bind() - take context as a first parameter and the list of arguments separated by comma.
Function.prototype.myBind = function () {
    let fn = this;
    let arg = [].slice.call(arguments, 1);
    let context = arguments[0];
    return function () {
        let fnArg = [].slice.call(arguments);
        return fn.apply(context, arg.concat(fnArg));
    }
}


function addPropToNumber(number) { return this.prop + number; }
var bound = addPropToNumber.myBind({ prop: 9 });
console.log(bound(1))
