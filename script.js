const funcc={
    Lower:getRandomLower,
    Upper:getRandomUpper,
    number:getRandomNumber,
    Symbol:getRandomSymbol
}
const result=document.getElementById('result');
const lower=document.getElementById('lowercase');
const length=document.getElementById('length');
const upper=document.getElementById('uppercase');
const number=document.getElementById('number');
const symbol=document.getElementById('symbol');
const generate=document.getElementById('generate');
const clip=document.getElementById('clipboard'); 
clip.addEventListener('click', ()=>{
        const textarea= document.createElement('textarea');
        const pass= result.innerText;
        console.log(textarea);
        if(!pass){
            return
        }
        textarea.value=pass;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('password copy')
})


function generatePassword(Upper,Lower, number,Symbol,len){
    let password='';
    const typeCount=Upper+Lower+ number+Symbol;
    console.log(typeCount);
    const arr=[ {Upper}, {Lower},{number},{Symbol}].filter(items => Object.values(items)[0]) ;
    // filter function filter out the non checked element and remove itt from arrays through object values
    if(typeCount===0){
        return '';
    }
    for(let i=0; i<len; i +=typeCount){
            arr.forEach(type=>{
                //console.log(type,"type");
                const funcName=Object.keys(type)[0];
                console.log(funcName, "nn");
           
            
               password += funcc[funcName]();
            })
    }
    console.log(password, "passworddd")
    const finalPassword=password.slice(0,len);
    return finalPassword;
    //console.log(arr);
}

// console.log(result);




generate.addEventListener('click', ()=>{
    const len= Number(length.value);
    console.log(len, "total length");
    const hasLower=lower.checked;
    const hasUpper=upper.checked;
    const hasSymbol=symbol.checked;
    const hasNumber=number.checked;

    console.log(generatePassword(hasUpper,hasLower, hasNumber,hasSymbol,len), "passwod")
    result.innerText= generatePassword(hasUpper,hasLower, hasNumber,hasSymbol,len);
});


function getRandomLower(){
    return String.fromCharCode( Math.floor(Math.random() *26)+  97);
}

function getRandomUpper(){
    return String.fromCharCode( Math.floor(Math.random() *26)+  65);
}
function getRandomNumber(){
    return String.fromCharCode( Math.floor(Math.random() *10)+  48);
}

function getRandomSymbol(){
    const symbol='!@#$%^&*()_+{}[]/?.,><';
    console.log(symbol[2])
    return symbol[Math.floor(Math.random()*symbol.length)];
}



console.log(getRandomLower());
console.log(getRandomUpper());
console.log(getRandomSymbol());

console.log(Math.random() *26);