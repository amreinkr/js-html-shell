console.log('hi!');

function sleepIn(weekday, vacation){
  let sleep = false;
  if(!weekday || vacation){
    sleep = true;
    return sleep;
  }
  return sleep;
}

function monkeyTrouble(aSmile, bSmile){
  let trouble = false;
  if((aSmile && bSmile)||(!aSmile && !bSmile)){
    trouble = true;
    return trouble;
  }
  return trouble;
}

function sumDouble(a, b){
  if(a == b){
    return ((a + b)*2);
  }
  return a + b;
}

