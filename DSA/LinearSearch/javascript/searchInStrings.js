//code to check the character index in  a string 
const string = "Hello World"
const target = "e"

const searchElement = (string,target) => {
if (string.length === 0) {
    return false
}
for (let index = 0; index < string.length; index++) {
    if (target == string.charAt(index)) {
        return target
    }
    
}
return false
}
const ans = searchElement(string,target)
console.log(ans);