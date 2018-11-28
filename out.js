let p = 13;
let q = 11;

function cryptoModule(a,b){
  result = a*b
  console.log(result + ' crypto')
  return result
}
function euler(a,b){
  let result =(a-1)*(b-1)
  console.log(result + ' euler')
  return result
}


let a  = euler(p,q)
let b = cryptoModule(p,q)

function eNumber(arg1,arg2){
  for( let i=2; i < arg2; i++){
    if(euklides(arg1,i) == 1){
      return i
    }
  }
}

let eValue = eNumber(a,b)
console.log(eValue + 'liczba e')

function euklides(a,b){
  while(a != b){
    if(a < b){
      b = b - a
    }else{
      a = a -b
    }
  }
  return a
}

function dNumber(arg1,arg2){
  let x = 1
  while (x*arg2%arg1 != 1){
    x++
  }
  return(x)
}
console.log(dNumber(a,eValue) + 'dNumber')

let publicKey = function(){
  arr = [];
  arr.push(eValue)
  arr.push(b)
  return arr
}

let secretKey = function(){
  arr = [];
  arr.push(dNumber(a,eValue))
  arr.push(b)
  return arr
}

console.log(secretKey())
console.log(publicKey())
