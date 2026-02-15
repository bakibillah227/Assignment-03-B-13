/* Problem-4 */

function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }

  let haCount = 0;
  let naCount = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "ha") {
      haCount++;
    } else if (array[i] === "na") {
      naCount++;
    } else {
      return "Invalid";
    }
  }

  if (haCount == naCount) {
    return "equal";
  }
  else if (haCount > naCount) {
    return true;
  }
  else {
    return false;
  }
}

console.log(gonoVote(["ha", "ha", "ha", "na"]));
