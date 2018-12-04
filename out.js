let p = 13;
let q = 11;

function cryptoModule(arg1,arg2){
  result = arg1*arg2
  return result
}
function euler(arg1,arg2){
  let result =(arg1-1)*(arg2-1)
  return result
}


let eulerNumber  = euler(p,q)
let b = cryptoModule(p,q)

function eNumber(arg1,arg2){
  for( let i=2; i < arg2; i++){
    if(euklides(arg1,i) == 1){
      return i
    }
  }
}

let eValue = eNumber(eulerNumber,b)

function euklides(arg1,arg2){
  while(arg1 != arg2){
    if(arg1 < arg2){
      arg2 = arg2 - arg1
    }else{
      arg1 = arg1 -arg2
    }
  }
  return arg1
}

function dNumber(arg1,arg2){
  let x = 1
  while (x*arg2%arg1 != 1){
    x++
  }
  return(x)
}

let publicKey = function(){
  arr = [];
  arr.push(eValue)
  arr.push(b)
  return arr
}

let secretKey = function(){
  arr = [];
  arr.push(dNumber(eulerNumber,eValue))
  arr.push(b)
  return arr
}

console.log(secretKey())
console.log(publicKey())

function encrypt(arg){
  let argPow = Math.pow(arg,eValue)
  let result = argPow%b
  return result
}

function decrypt(arg){
  let encryptedNumber =  bigInt(arg).pow(dNumber(eulerNumber,eValue)) //Math.pow(arg,dNumber(eulerNumber,eValue))
  console.log(encryptedNumber)
  let result = encryptedNumber%b
  return result
}

console.log(decrypt(7))
