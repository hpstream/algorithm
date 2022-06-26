let weights = [3, 5, 4, 10, 7, 14, 2, 11].sort((a, b) => a - b);

let capacity = 30;
let weight = 0;
let count = 0;
for (let i = 0; i < weights.length; i++) {
  let newWeight = weight + weights[i];
  if (newWeight <= capacity) {
    count++;
    weight = newWeight;
    console.log(weights[i]);
  } else {
    break;
  }
}
console.log(`一共选择了${count},总共重量:${weight}`);
