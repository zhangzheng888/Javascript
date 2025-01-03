/*
Write a switch statement which tests val and sets answer for the following conditions:
1 - alpha
2 - beta
3 - gamma
4 - delta
*/

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
    case 1:
      answer = "alpha"
      console.log(answer);
      break;
    case 2:
      answer = "beta"
      console.log(answer);
      break;
    case 3:
      answer = "gamma"
      console.log(answer);
      break;
    case 4:
      answer = "delta"
      console.log(answer);
      break;
    }
    return answer;
  }
  
caseInSwitch(1);
// "alpha"
caseInSwitch(2);
// "beta"
caseInSwitch(3);
// "gamma"
caseInSwitch(4);
// "delta"