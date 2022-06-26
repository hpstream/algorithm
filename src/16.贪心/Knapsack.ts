class Article {
  public valueDensity: number;
  constructor(public weight: number, public value: number) {
    this.valueDensity = value / weight;
  }
  toString() {
    return `[weight=${this.weight},value=${this.value},valueDensity=${this.valueDensity}]`;
  }
}

let articles: Article[] = [
  new Article(35, 10),
  new Article(30, 40),
  new Article(60, 30),
  new Article(50, 50),
  new Article(45, 35),
  new Article(10, 40),
  new Article(25, 30),
];

export function Knapsack() {
  let valueArticle = articles.sort((a, b) => b.value - a.value);
  let capacity = 150;
  let selectedArticles: Article[] = [];

  let weight = 0;
  let value = 0;

  for (let i = 0; i < valueArticle.length && weight < capacity; i++) {
    let newWeight = weight + valueArticle[i].weight;
    if (newWeight <= capacity) {
      weight = newWeight;
      value += valueArticle[i].value;
      selectedArticles.push(valueArticle[i]);
    }
  }
  console.log("【价值主导】");
  console.log(`总价值：${value};重量：${weight}`);
  console.log(`${selectedArticles.join("\n")}`);
}
export function Knapsack1() {
  let valueArticle = articles.sort((a, b) => a.weight - b.weight);
  let capacity = 150;
  let selectedArticles: Article[] = [];

  let weight = 0;
  let value = 0;

  for (let i = 0; i < valueArticle.length && weight < capacity; i++) {
    let newWeight = weight + valueArticle[i].weight;
    if (newWeight <= capacity) {
      weight = newWeight;
      value += valueArticle[i].value;
      selectedArticles.push(valueArticle[i]);
    }
  }
  console.log("【重量主导】");
  console.log(`总价值：${value};重量：${weight}`);
  console.log(`${selectedArticles.join("\n")}`);
}

export function Knapsack2() {
  let valueArticle = articles.sort((a, b) => b.valueDensity - a.valueDensity);
  let capacity = 150;
  let selectedArticles: Article[] = [];

  let weight = 0;
  let value = 0;

  for (let i = 0; i < valueArticle.length && weight < capacity; i++) {
    let newWeight = weight + valueArticle[i].weight;
    if (newWeight <= capacity) {
      weight = newWeight;
      value += valueArticle[i].value;
      selectedArticles.push(valueArticle[i]);
    }
  }
  console.log("【性价比主导】");
  console.log(`总价值：${value};重量：${weight}`);
  console.log(`${selectedArticles.join("\n")}`);
}
Knapsack();
Knapsack1();
Knapsack2();
