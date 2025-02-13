function StringUppercase (string){
    return string.toUpperCase();
}

function StringReverse (string){
    let reverseString = string.split('').reverse().join('');
    return reverseString;
}

module.exports = {StringUppercase, StringReverse};