let sentence = prompt("Please enter input");

let input = sentence.split(" ");
let mapCount = new Map();
for (let i = 0; i < input.length; i++) {
  if (mapCount.has(input[i])) {
    mapCount.set(input[i], mapCount.get(input[i]));
  } else {
    mapCount.set(input[i], 1);
  }
}
