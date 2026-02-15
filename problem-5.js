/* Problem-5 */

function analyzeText(str) {
  if (typeof str !== "string" || str.trim() === "") {
    return "Invalid";
  }

  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      count++;
    }
  }

  const newArr = str.split(" ");

  let bigWord = "";

  for (const word of newArr) {
    let wordCount = word.length;
    if (bigWord.length < word.length) {
      bigWord = word;
    }
  }
  return {
    longwords: bigWord,
    token: count,
  };
}

console.log(analyzeText("Hello world i hjae asefasea eag4rtasf dgwerg "));
