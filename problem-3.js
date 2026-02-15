/* Problem-3 */

function finalScore(omr) {

if (typeof omr !== "object" || omr === null || Array.isArray(omr)) {
  return "Invalid";
}

  if (omr.right + omr.wrong + omr.skip !== 100) {
    return "Invalid";
  }

  let final = omr.right - omr.wrong * 0.5;

  return Math.round(final);
}

console.log(finalScore(["Raj"]));


