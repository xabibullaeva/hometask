//ex1
let string = prompt("Enter string/number with commas: ")
let str = string.split(',')

function array(string) {
    if (string == '' || string.length === 2){
        console.log("Null")
    }else{
        string.splice(0,1);
        string.splice(-1,1);
        return string
    }
}
console.log(array(str));

//ex2
alert("Task-2: twoOldNumber")

function twoOldNumber(array) {
    array.sort((a,b) => b - a);
    array.splice(2);
    return array
}
console.log(twoOldNumber([2, 3, 12, 43, 56, 7,  44, 6]));
