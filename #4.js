/*Part 1*/
function isOldEnoughToDrive(age) {
    if (age > 16) return "yes"
    return "no";
  }

/*Original 1)
{function isOldEnoughToDrive(age) {
  if (age > 16) {
    return "Yes"
  } else {
    return "No";
  }
}}*/

/*Part 2*/
function numberIsDivisible(num) {
    if (num % 3 === 0) {
        return "Divisible by 3";
      }
    if (num % 2 === 0) {
        return "Divisible by 2";
      }  
    if (num % 2 === 0 && num % 3 === 0) {
        return "Divisible by 2 and 3";
      }
    if (num <= 0) {
      return "Number is not positive";
    }
    return "Not divisible by 2 or 3";
  }

/*Original 2)
{function numberIsDivisible(num) {
  if (num > 0) {
    if (num % 2 === 0) {
      if (num % 3 === 0) {
        return "Divisible by 2 and 3";
      } else {
        return "Divisible by 2";
      }
    } else {
      if (num % 3 === 0) {
        return "Divisible by 3";
      } else {
        return "Not divisible by 2 or 3";
      }
    }
  } else {
    return "Number is not positive";
  }
}}*/
