function palindromeChecker (str) {
  let newStr = '';
  for (let i = str.length -1; i >= 0; i--) {
    newStr += str[i];  
  }

  if (newStr === str) {
    return true;
  }
  
  return false;
}