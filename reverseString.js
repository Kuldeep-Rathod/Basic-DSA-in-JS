
//Long
const reversString = (str) => {
    if(!str || str.length < 2 || typeof str !== 'string'){
        return "please enter valid input";
    }

    const backword = [];
    const totalLength = str.length - 1;

    for(i=totalLength; i>=0; i--){
        backword.push(str[i]);
    }

    return backword.join('');
}

//Short
const reversString2 = (str) => {
    return str.split('').reverse().join('')
}

console.log(reversString2('Hello Kuldeep'))